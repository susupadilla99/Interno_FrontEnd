'use client'
import { format } from 'date-fns';
import React, { useEffect } from 'react'
import EnquiryForm from './EnquiryForm'
import SecondSectionUploadDevFundPrivChecklist from './SecondSectionUploadDevFundPrivChecklist'
import { useRouter } from 'next/router';

export enum PaymentOptions {
  OffSiteIncome = 'Offsite Income',
  Capitalisation = 'Capitalisation'
}

export type ConstructionFinanceForm = {
  // Section 1
  developerName?: string,
  email?: string,
  projectDescription?: string,
  mobile?: string,
  purpose?: string[],
  currentStatus?: string,

  // Section 2
  locality?: string,
  localCouncil?: string,
  guarantors?: string,
  zoning?: string,
  borrower?: string,
  mortgagor?: string,
  buildabilityIssues?: string[],

  // Section 3
  purchasePriceGST?: string,
  grossRealisationGST?: string,
  currentMortgage?: string,
  landGST?: string,
  lender?: string,
  rate?: string,

  // Section 4
  daApprove?: string,
  baccApprove?: string,

  // Section 5
  contractPriceGST?: string,
  totalOtherCost?: string,
  constructionPeriod?: string,
  proposedCommencement?: string,
  loanTerm?: string,
  builderName?: string,

  // Section 6
  fixedPrice?: boolean,
  interestPayment?: string,
  presaleAchieved?: string,
  presaleProposed?: string,
  marketingAgent?: string,
  applicationAlsoSubmitted?: string,
  notes?: string,

  // ID Documents
  fileURLs?: string[]
}


const UploadTitles = [
  "Full personal information for directors and guarantors; i.e. ID including date of birth, driver’s license number, past five (5) years employment / business history",
  "Copy of Assets & Liabilities Statements on all Borrowers/Guarantors",
  "Copy of the Development Approval and Building Approval (Construction Certificate), if available",
  "Details of the proposed builder and a resume of its building experience if available",
  "Resume of the borrowers development / building experience",
  "Confirmation of construction / development costs",
  "Copy of (Fixed Price, Fixed Time) Building Contract",
  "Solicitors, Accountant and Bankers details, including name, address, telephone number and contact;",
  "Feasibility Report on the Project",
  "Valuation Report on the Project if available",
  "Confirmation of Pre-Sale Contracts if applicable (Schedule)",
  "Details of Marketing Strategy and Agent (s)",
  "Copy of Contract for Sale for subject property (front page)",
]

const MultistepForm = ({ blockData, id, }: { blockData: any, id: number, }) => {
  const [page, setPage] = React.useState<number>(1);
  const [formData, setFormData] = React.useState<ConstructionFinanceForm>();
  const developerName = formData?.developerName
  const [isDone, setIsDone] = React.useState<boolean>(false)
  const filesUrl: string[] = new Array<string>();



  const areAllValuesEmpty = () => {
    // Check if all specified properties are empty

    // We will consider a value as empty if it's null, undefined, or an empty string.
    const isEmpty = (value: string | undefined | null): boolean => {
      return value === null || value === undefined || value.trim() === '';
    };

    return isEmpty(formData?.developerName) || isEmpty(formData?.email) || isEmpty(formData?.mobile);
  }

  const requiredFieldsNotSatisfied = areAllValuesEmpty();

  const renderCurrentStep = () => {
    switch (page) {
      case 1:
        return <EnquiryForm blockData={blockData} id={id} formData={formData} setFormData={setFormData} />
      case 2:
        return <SecondSectionUploadDevFundPrivChecklist
          title={UploadTitles}
          developerName={developerName}
          isDone={setIsDone}
          filesUrl={filesUrl}
          formData={formData}
          setFormData={setFormData} />
      default:
        return (<div>Error!!!</div>)
    }
  }


  const sendData = () => {
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'MMMM dd, yyyy HH:mm:ss');
    const content = `
      <div>Hi Admin,</div>
      <br/>
      <div>You have received a new construction finance enquiry form from maqro.com.au on ${formattedDate.toString()}</div>
      <br/>
      <address>
      <div>Developer Name : ${formData?.developerName?formData?.developerName:""} </div>
      <div>Phone : ${formData?.mobile?formData?.mobile:""} </div>
      <div>Email : ${formData?.email?formData?.email:""} </div>
      <div>Project Description : ${formData?.projectDescription?formData?.projectDescription:""} </div> 
      <div>Purpose : ${formData?.purpose?formData?.purpose:""} </div>
      <div>Current Status : ${formData?.currentStatus?formData?.currentStatus:""} </div>
    

      <div>Locality : ${formData?.locality?formData?.locality:""} </div>
      <div>Local Council : ${formData?.localCouncil?formData?.localCouncil:""} </div>
      <div>Guarantors : ${formData?.guarantors?formData?.guarantors:""} </div>
      <div>Zoning : ${formData?.zoning?formData?.zoning:""} </div>
      <div>Borrower  : ${formData?.borrower?formData?.borrower:""} </div>

      <div>Mortgagor : ${formData?.mortgagor?formData?.mortgagor:""} </div>
      <div>Buildability Issues : ${formData?.buildabilityIssues?formData?.buildabilityIssues:""} </div>
    

      <div>Purchase Price GST : ${formData?.purchasePriceGST?formData?.purchasePriceGST:""} </div>
      <div>Gross Realisation GST : ${formData?.grossRealisationGST?formData?.grossRealisationGST:""} </div>
      <div>Current Mortgage  : ${formData?.currentMortgage?formData?.currentMortgage:""} </div>
      <div>Land GST  : ${formData?.landGST?formData?.landGST:""} </div>

      <div>Lender  : ${formData?.lender?formData?.lender:""} </div>
      <div>Rate : ${formData?.rate?formData?.rate:""} </div>
    

      <div>DA Approve : ${formData?.daApprove?formData?.daApprove:""} </div>
      <div>BA/CC Approve : ${formData?.baccApprove?formData?.baccApprove:""} </div>
    

      <div>Contract Price GST: ${formData?.contractPriceGST?formData?.contractPriceGST:""} </div>
      <div>Total Other Cost : ${formData?.totalOtherCost?formData?.totalOtherCost:""} </div>
      <div>Construction Period : ${formData?.constructionPeriod?formData?.constructionPeriod:""} </div>
      <div>Proposed Commencement  : ${formData?.proposedCommencement?formData?.proposedCommencement:""} </div>
      <div>Loan Term : ${formData?.loanTerm?formData?.loanTerm:""} </div>
      <div>Builder Name : ${formData?.builderName?formData?.builderName:""} </div>
    

      <div>Fixed Price : ${formData?.fixedPrice?formData?.fixedPrice:""} </div>
      <div>Interest Payment  : ${formData?.interestPayment?formData?.interestPayment:""} </div>
      <div>Presale Achieved : ${formData?.presaleAchieved?formData?.presaleAchieved:""} </div>
      <div>Presale Proposed : ${formData?.presaleProposed?formData?.presaleProposed:""} </div>
      <div>Marketing Agent : ${formData?.marketingAgent?formData?.marketingAgent:""} </div>
  
      <div>Application Also Submitted : ${formData?.applicationAlsoSubmitted?formData?.applicationAlsoSubmitted:""} </div>
      <div>Notes : ${formData?.notes?formData?.notes:""} </div>
    
      <div>Submitted files: </div>

      <blockquote></blockquote>
        ${formData?.fileURLs?.map((url, index) =>
      `<div>
        <p>${UploadTitles[index]}</p>
        <a href=${url}>${url}</a>
      </div>`
    )}
      
      

      </address>
      <br/>
      <br/>
      <div>Have a good day,</div>
      <br/>
      <div>Maqro Message Helper</div>
    `

    //sending email
    const request = fetch(`https://backend.maqro.com.au/wp-json/mq/v1/simple-html-email`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: content,
      }),
      next: { revalidate: 10 },
    })

    alert("Enquiry sent. We'll get back to you as soon as possible")

  }

  return (
    <div className='mb-[100px]' key={id}>

      {/* Main Display */}
      <div className='mb-[50px] flex justify-center'>
        {renderCurrentStep()}
      </div>

      {/* Pagination */}
      <div className='flex justify-center gap-10'>

        {/* Prev Button */}
        <button
          onClick={() => { setPage(page > 1 ? page - 1 : page) }}
          className={`text-black py-1 px-3 border rounded-md bg-[#CDA274] ${page == 1 ? 'opacity-40 cursor-default' : 'hover:bg-[#434950] hover:text-white'}`}
        >Prev</button>

        <h3>{page}</h3>

        {/* Next Button */}
        <button
          onClick={() => {
            switch (page) {
              case 1:
                if (!requiredFieldsNotSatisfied) setPage(page + 1)
                break;
              case 2:
                if (isDone) sendData()
                break
              default:
                break
            }
          }}
          className={`text-black py-1 px-3 border rounded-md bg-[#CDA274] ${requiredFieldsNotSatisfied || page == 2 && !isDone ? 'opacity-40 cursor-default' : 'hover:bg-[#434950] hover:text-white'}`}
        >{page == 2 ? 'Submit' : 'Next'}</button>

      </div>
    </div>
  )
}

export default MultistepForm