"use client";
import React, { useEffect } from 'react';
import Select from 'react-select';
import { useState } from 'react';
import Image from 'next/image';
import { ConstructionFinanceForm, PaymentOptions } from './MultistepForm';

// Custom styles for the dropdown
// Updated custom styles for the dropdown
const customStyles = {
    control: (provided: any, state: any) => ({
        //   ...provided,
        display: 'flex',
        padding: '0.5rem',
        borderRadius: '0.375rem',
        borderColor: state.isHover ? 'black' : 'black',
        fontSize: '1.375rem',
        boxShadow: 'none',
        width: '100%', // Set the width of the dropdown to 100%
        borderWidth: state.isFocused ? '2px' : '0px',
    }),
    menu: (provided: any) => ({
        ...provided,
        borderRadius: 0,
        marginTop: 0,
        width: '100%', // Set the width of the dropdown menu to 100%
    }),
    // Set the text color to black
    option: (provided: any) => ({
        ...provided,
        color: '#000000',
    }),
    placeholder: (provided: any) => ({
        ...provided,
        color: '#9CA3AF',
    }),
    valueContainer: (provided: any) => ({
        ...provided,
        padding: '0px',
    }),
    input: (provided: any) => ({
        ...provided,
        margin: '0px',
        padding: '0px',
    }),
};

type SelectedOption = string[];

export default function EnquiryForm({ blockData, id, formData, setFormData }: { blockData: any, id: any, formData?: ConstructionFinanceForm, setFormData: any}) {

    const [selectedPurpose, setSelectedPurpose] = React.useState<SelectedOption>([]);
    const [selectedBuildabilityIssues, setSelectedBuildabilityIssues] = React.useState<SelectedOption>([]);
    const [daShowWhyInput, setDAShowWhyInput] = useState(false);
    const [daWhyInputValue, setDAWhyInputValue] = useState('');


    const [baCCShowWhyInput, setBaCCShowWhyInput] = useState(false);
    const [baCCWhyInputValue, setBaCCWhyInputValue] = useState('');

    // Wall of state variable

    // Section 1
    const [developerName, setdeveloperName] = React.useState<string>()
    const [email, setemail] = React.useState<string>()
    const [projectDescription, setprojectDescription] = React.useState<string>()
    const [mobile, setmobile] = React.useState<string>()
    const [purpose, setpurpose] = React.useState<string[]>()
    const [currentStatus, setcurrentStatus] = React.useState<string>()
    const [otherCurrentStatus, setOtherCurrentStatus] = React.useState<string>("others")

    // Section 2
    const [locality, setlocality] = React.useState<string>()
    const [localCouncil, setlocalCouncil] = React.useState<string>()
    const [guarantors, setguarantors] = React.useState<string>()
    const [zoning, setzoning] = React.useState<string>()
    const [borrower, setborrower] = React.useState<string>()
    const [mortgagor, setmortgagor] = React.useState<string>()
    const [buildabilityIssues, setbuildabilityIssues] = React.useState<string[]>()

    // Section 3
    const [purchasePriceGST, setpurchasePriceGST] = React.useState<string>()
    const [grossRealisationGST, setgrossRealisationGST] = React.useState<string>()
    const [currentMortgage, setcurrentMortgage] = React.useState<string>()
    const [landGST, setlandGST] = React.useState<string>()
    const [lender, setlender] = React.useState<string>()
    const [rate, setrate] = React.useState<string>()

    // Section 4
    const [daApprove, setdaApprove] = React.useState<string>()
    const [baccApprove, setbaccApprove] = React.useState<string>()

    // Section 5
    const [contractPriceGST, setcontractPriceGST] = React.useState<string>()
    const [totalOtherCost, settotalOtherCost] = React.useState<string>()
    const [constructionPeriod, setconstructionPeriod] = React.useState<string>()
    const [proposedCommencement, setproposedCommencement] = React.useState<string>()
    const [loanTerm, setloanTerm] = React.useState<string>()
    const [builderName, setbuilderName] = React.useState<string>()

    // Section 6
    const [fixedPrice, setfixedPrice] = React.useState<boolean>()
    const [interestPayment, setinterestPayment] = React.useState<string>()
    const [presaleAchieved, setpresaleAchieved] = React.useState<string>()
    const [presaleProposed, setpresaleProposed] = React.useState<string>()
    const [marketingAgent, setmarketingAgent] = React.useState<string>()
    const [applicationAlsoSubmitted, setapplicationAlsoSubmitted] = React.useState<string>()
    const [notes, setnotes] = React.useState<string>()

    const handleRadioButtonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedValue = event.target.value;
        setcurrentStatus(selectedValue);
      };
  
    
    const handleDAOptionChange = (option: 'yes' | 'no') => {
        if (option === 'no') {
            setDAShowWhyInput(true);
        } else {
            setDAShowWhyInput(false);
        }
    };

    const handleBaCCOptionChange = (option: 'yes' | 'no') => {
        if (option === 'no') {
            setBaCCShowWhyInput(true);
        } else {
            setBaCCShowWhyInput(false);
        }
    };

    const withPic = () => {
        try {
            if (blockData.Logo.data.attributes.url != null) {
                return (
                    <div className='flex sm:justify-end xs:justify-center xxs:justify-center xxxs:justify-center'>
                        <Image src={blockData.Logo.data.attributes.url} width={150} height={150} alt='logo' />
                    </div>
                )
            }
        } catch {
            return <></>
        }
    }

    const updateFormData = (event:any) => {
        event.preventDefault()
        
        const validateEmail = (email: string | undefined): boolean => {
            
            const emailRegex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const emailToValidate = email ?? '';
            
       
            return emailRegex.test(emailToValidate);
        };
           
        const updatedData: ConstructionFinanceForm = {
            // Section 1
            developerName: developerName,
            email: email,
            projectDescription: projectDescription,
            mobile: mobile,
            purpose: selectedPurpose,
            currentStatus: currentStatus,

            // Section 2
            locality: locality,
            localCouncil: localCouncil,
            guarantors: guarantors,
            zoning: zoning,
            borrower: borrower,
            mortgagor: mortgagor,
            buildabilityIssues: selectedBuildabilityIssues,

            // Section 3
            purchasePriceGST: purchasePriceGST,
            grossRealisationGST: grossRealisationGST,
            currentMortgage: currentMortgage,
            landGST: landGST,
            lender: lender,
            rate: rate,

            // Section 4
            daApprove: !daShowWhyInput?'Yes':`No: ${daWhyInputValue}`,
            baccApprove: !baCCShowWhyInput?'Yes':`No: ${baCCWhyInputValue}`,

            // Section 5
            contractPriceGST: contractPriceGST,
            totalOtherCost: totalOtherCost,
            constructionPeriod: constructionPeriod,
            proposedCommencement: proposedCommencement,
            loanTerm: loanTerm,
            builderName: builderName,

            // Section 6
            fixedPrice: fixedPrice,
            interestPayment: interestPayment,
            presaleAchieved: presaleAchieved,
            presaleProposed: presaleProposed,
            marketingAgent: marketingAgent,
            applicationAlsoSubmitted: applicationAlsoSubmitted,
            notes: notes,

            // ID Documents
            fileURLs: formData?.fileURLs
        }

        if (!validateEmail(email)) {
            alert('INVALID email format!');
        } else {
            setFormData(updatedData)
        }
        
    }
    

    return (
        <form id='enquiryForm' key={id}
            className='xs:rounded-none xxs:rounded-none xxxs:rounded-none sm:rounded-[70px] max-w-7xl flex-row justify-center items-center mx-auto text-black p-12 bg-[#F4F0EC]'>
            {withPic()}
            <div className='text-center mb-6'>
                <h2> {blockData.Heading} </h2>
                <h2> {blockData.Content} </h2>
            </div>

            {/* 1st section */}
            <div className=' gap-10 grid grid-cols-2 mx-auto w-full'>

                {/* 1st column */}
                <div className='sm:col-span-1 xs:col-span-2 xxs:col-span-2 xxxs:col-span-2 '>
                    {/* Developer name */}
                    <div className='flex p-2 items-center'>
                        {/* <p className='text-black px-2'>Developer name: </p> */}
                        <div className='flex-col w-full'>
                            <input
                                id='DevName'
                                type='text'
                                maxLength={50}
                                name='DevName'
                                className='bg-white rounded-md  p-2 w-full'
                                placeholder='Developer name*'
                                onChange={(e) => { setdeveloperName(e.target.value) }}
                                required />
                        </div>
                    </div>

                    {/* Email */}
                    <div className='flex p-2'>
                        {/* <p className='text-black px-2'>Email: </p> */}
                        <div className='flex-col w-full'>
                            <input
                                id='email'
                                type='email'
                                maxLength={40}
                                name='email'
                                placeholder='Email*'
                                className='bg-white rounded-md w-full p-2'
                                onChange={(e) => { setemail(e.target.value) }}
                                required
                            />

                        </div>
                    </div>

                    {/* Project Description */}
                    <div className='flex-row p-2'>
                        {/* <p className='text-black px-2'>Project Description</p> */}
                        <div className='flex-col w-full'>
                            <textarea
                                id='message'
                                name='message'
                                rows={5}
                                cols={60}
                                maxLength={300}
                                placeholder='Project description'
                                className='bg-white resize-none p-2 rounded-md font-Jost text-[22px] text-[#000000] w-[100%]'
                                onChange={(e) => { setprojectDescription(e.target.value) }}

                            />

                        </div>
                    </div>
                </div>

                {/* 2nd column */}
                <div className='sm:col-span-1 xs:col-span-2 xxs:col-span-2 xxxs:col-span-2 '>
                    {/* mobile */}
                    <div className='flex p-2'>
                        {/* <p className='text-black px-2'>Mobile: </p> */}
                        <div className='flex-col w-full'>
                            <input
                                id='mobile'
                                type='text'
                                maxLength={20}
                                name='mobile'
                                className='bg-white rounded-md p-2 w-full'
                                placeholder='Mobile *'
                                onChange={(e) => { setmobile(e.target.value) }}
                                required
                            />
                        </div>
                    </div>

                    {/* purpose */}
                    <div className='flex flex-col p-2'>
                        {/* <p className='text-black px-2'>Purpose: </p> */}
                        <Select
                            isMulti
                            options={[
                                { value: 'acquisition', label: 'ACQUISITION' },
                                { value: 'construction', label: 'CONSTRUCTION' },
                                { value: 'take_out', label: 'TAKE OUT' },
                                { value: 'guarantee', label: 'GUARANTEE' },
                                { value: 'put_call_option', label: 'PUT/CALL OPTION' },
                                { value: 'delayed_settlements', label: 'DELAYED SETTLEMENT' },
                            ]}
                            styles={customStyles}
                            placeholder="Purpose"
                            value={selectedPurpose.map((item) => ({ value: item, label: item }))}
                            onChange={
                                (selectedOptions) => {
                                    setSelectedPurpose(selectedOptions.map((option) => option.value))
                                    setpurpose(selectedPurpose);
                                }}
                            className='bg-white rounded-md w-full'
                        />
                    </div>

                    {/* current status */}
                    <div className='p-2'>
                        <p className='text-black'>Current Status:</p>
                        <div className='grid grid-cols-2 py-2'>
                            <div className='col-span-1'>
                            <label htmlFor="optioned" className="pl-3 flex gap-2 items-center text-xl">
                                     <input
                                        id="optioned"
                                        type="radio"
                                        name="current_status"
                                        value="optioned"
                                        onChange={(e) => { setcurrentStatus(e.target.value) }}  
                                        />
                                 Optioned
                            </label>
                            </div>
                            <div className='col-span-1'>
                                <label htmlFor="exchanged" className='pl-3 flex gap-2 items-center text-xl'>
                                    <input
                                         id="exchanged"
                                         type="radio"
                                         name="current_status"
                                         value="exchanged"
                                         onChange={(e) => {setcurrentStatus(e.target.value)}}
                                         
                                    />
                                    Exchanged
                                </label>
                            </div>
                        </div>

                        <div className='grid grid-cols-2 py-2'>
                            <div className='col-span-1'>
                                <label htmlFor="settled" className='pl-3 flex gap-2 items-center text-xl'>
                                    <input
                                        id="settled"
                                        type="radio"
                                        name="current_status"
                                        value="settled"
                                        onChange={(e) => { setcurrentStatus(e.target.value) }}
                                        
                                    />
                                    Settled
                                </label>
                            </div>
                            <div className='col-span-1'>
                                <label htmlFor="da_ba" className='pl-3 flex gap-2 items-center text-xl'>
                                    <input
                                        id="DA / BA"
                                        type="radio"
                                        name="current_status"
                                        value="DA / BA"
                                        onChange={(e) => { setcurrentStatus(e.target.value) }}
                                        
                                    />
                                    DA / BA
                                </label>
                            </div>
                        </div>

                        <div className='flex gap-2 w-full py-2'>
                            <label htmlFor="current_status_other" className='pl-3 flex gap-2 items-center text-xl'>
                                <input
                                    id="current_status_other"
                                    type="radio"
                                    name="current_status"
                                    value={otherCurrentStatus}
                                    onChange={(e) => { setcurrentStatus(e.target.value) }}
                                    
                                />
                                Other:
                            </label>
                            <div className=' grow-1 flex-col w-full'>
                                <div className='flex'>
                                    <input
                                        id='current_status_other_input'
                                        type='text'
                                        maxLength={20}
                                        name='current_status_other_input'
                                        className='bg-white w-full rounded-md pl-3'
                                        onChange={(e) => { 
                                            setOtherCurrentStatus(e.target.value)
                                            setcurrentStatus(e.target.value)
                                         }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* 2nd section */}
            <div className=' gap-10 grid grid-cols-2 mx-auto'>
                {/* 1st column */}
                <div className='sm:col-span-1 xs:col-span-2 xxs:col-span-2 xxxs:col-span-2 '>
                    {/* Locality */}
                    <div className='flex p-2'>
                        {/* <p className='text-black px-2'>Locality: </p> */}
                        <div className='flex-col w-full'>
                            <input
                                id='locality'
                                type='text'
                                maxLength={50}
                                name='locality'
                                className='bg-white rounded-md w-full p-2'
                                placeholder='Locality'
                                onChange={(e) => { setlocality(e.target.value) }}
                            />

                        </div>
                    </div>

                    {/* Local Council */}
                    <div className='flex p-2 justify-center items-end'>
                        {/* <p className='text-black px-2'>Local Council: </p> */}
                        <div className='flex-col w-full'>
                            <input
                                id='local_council'
                                type='text'
                                maxLength={20}
                                name='local_council'
                                placeholder='Local council'
                                className='bg-white rounded-md p-2 w-full'
                                onChange={(e) => { setlocalCouncil(e.target.value) }}
                            />

                        </div>
                    </div>

                    {/* GUARANTORS/DIRECTORS */}
                    <div className='flex flex-col p-2'>
                        {/* <p className='text-black px-2 text-md font-bold'>GUARANTORS/DIRECTORS:</p> */}
                        <div className='flex-col w-full'>
                            <textarea
                                id='guarantors_directors'
                                name='guarantors_directors'
                                rows={5}
                                cols={60}
                                maxLength={300}
                                placeholder='Guarantors/Directors'
                                className='bg-white resize-none p-2 rounded-md font-Jost text-[22px] text-[#000000] w-[100%]'
                                onChange={(e) => { setguarantors(e.target.value) }}
                            />

                        </div>
                    </div>

                </div>

                {/* 2nd column */}
                <div className='sm:col-span-1 xs:col-span-2 xxs:col-span-2 xxxs:col-span-2 '>

                    {/* zoning */}
                    <div className='flex p-2'>
                        {/* <p className='text-black px-2'>Zoning: </p> */}
                        <div className='flex-col w-full'>
                            <input
                                id='zoning'
                                type='text'
                                maxLength={20}
                                name='zoning'
                                className='bg-white rounded-md p-2 w-full'
                                placeholder='Zoning'
                                onChange={(e) => { setzoning(e.target.value) }}
                            />
                        </div>
                    </div>

                    {/* BORROWER */}
                    <div className='flex p-2'>
                        {/* <p className='text-black px-2'>Borrower: </p> */}
                        <div className='flex-col w-full'>
                            <input
                                id='borrower'
                                type='text'
                                maxLength={20}
                                name='borrower'
                                className='bg-white rounded-md p-2 w-full'
                                placeholder='Borrower'
                                onChange={(e) => { setborrower(e.target.value) }}
                            />
                        </div>
                    </div>

                    {/* MORTGAGOR */}
                    <div className='flex p-2'>
                        {/* <p className='text-black px-2'>Mortagagor: </p> */}
                        <div className='flex-col w-full'>
                            <input
                                id='mortagagor' // Typo?
                                type='text'
                                maxLength={20}
                                name='mortagagor' // Typo?
                                className='bg-white rounded-md p-2 w-full'
                                placeholder='Mortgagor'
                                onChange={(e) => { setmortgagor(e.target.value) }}
                            />
                        </div>
                    </div>

                    {/* BUILDABILITY ISSUES */}
                    <div className="flex flex-col p-2">
                        {/* <p className="text-black px-2  font-bold">BUILDABILITY ISSUES - ANY OF:</p> */}
                        <Select
                            isMulti
                            options={[
                                { value: 'excavation', label: 'EXCAVATION' },
                                { value: 'demolition', label: 'DEMOLITION' },
                                { value: 'remediation', label: 'REMEDIATION' },
                                { value: 'site_on_incline', label: 'SITE ON INCLINE' },
                                { value: 'heritage', label: 'HERITAGE' },
                                { value: 'elevators', label: 'ELEVATORS' },
                            ]}
                            styles={customStyles}
                            value={selectedBuildabilityIssues.map((item) => ({ value: item, label: item }))}
                            onChange={(selectedOptions) => {
                                setSelectedBuildabilityIssues(selectedOptions.map((option) => option.value))
                                setbuildabilityIssues(selectedBuildabilityIssues)
                            }}
                            placeholder="Buildability Issues - Any Of"
                            className="bg-white rounded-md w-full" // Move the Select below the paragraph on mobile screens (smaller than sm)
                        />
                    </div>
                </div>
            </div>

            {/* 3rd Section */}
            <div className="grid grid-cols-2 mx-auto">

                {/* 1st column */}
                <div className="col-span-2">
                    <div className="flex sm:flex-row xs:flex-col xxs:flex-col xxxs:flex-col justify-start items-end  p-2">
                        {/* <p className="text-black pr-1">Site / Land Purchase Price Net GST: </p> */}
                        <div className="flex-col w-full">
                            <input
                                id="site_land_purchase_price_net_gst"
                                maxLength={50}
                                className="bg-white p-2 rounded-md w-full"
                                type="text"
                                placeholder='Site / Land Purchase Price Net GST (Face Value of Contract)'
                                name="site_land_purchase_price_net_gst"
                                onChange={(e) => { setpurchasePriceGST(e.target.value) }}
                            />

                        </div>
                        {/* <p className="text-black px-1 text-base">(Face Value of Contract)</p> */}
                    </div>
                </div>

                {/* 2nd Column */}
                <div className="sm:col-span-1 xs:col-span-2 xxs:col-span-2 xxxs:col-span-2 ">

                    {/* GROSS REALISATION NET OF GST */}
                    <div className="flex p-2 justify-center items-start mb-0">
                        {/* <p className="text-black text-base pr-1">GROSS REALISATION NET OF GST: </p> */}
                        <div className="flex-col w-full">
                            <input
                                id="gross_realisation_net_of_gst"
                                type="text"
                                maxLength={20}
                                placeholder='Gross realisation Net of GST'
                                className="bg-white rounded-md p-2 w-full"
                                name="gross_realisation_net_of_gst"
                                onChange={(e) => { setgrossRealisationGST(e.target.value) }}
                            />

                        </div>
                    </div>

                    {/* CURRENT MORTGAGE ON SITE */}
                    <div className="flex p-2 justify-center items-end">
                        {/* <p className="text-black text-base pr-2">CURRENT MORTGAGE ON SITE: $</p> */}
                        <div className="flex-col w-full ">
                            <input
                                id="Current_mortgage_on_site"
                                maxLength={20}
                                className="bg-white rounded-md p-2 w-full"
                                type="text"
                                placeholder='Current mortgage on site'
                                name="Current_mortgage_on_site"
                                onChange={(e) => { setcurrentMortgage(e.target.value) }}
                            />
                        </div>
                    </div>
                </div>

                {/* 3rd Column */}
                <div className="sm:col-span-1 xs:col-span-2 xxs:col-span-2 xxxs:col-span-2 ">
                    {/* LAND DA VAL NET GST */}
                    <div className="flex justify-between items-end p-2">
                        {/* <p className="text-black px-1">LAND DA VAL NET GST:</p> */}
                        <div className="flex-col w-full">
                            <input
                                id="land_da_val_net_gst"
                                type="text"
                                maxLength={50}
                                className="bg-white rounded-md p-2 w-full"
                                placeholder='LAND DA VAL NET GST'
                                name="land_da_val_net_gst"
                                onChange={(e) => { setlandGST(e.target.value) }}
                            />
                        </div>
                    </div>

                    {/* Lender */}
                    <div className="flex p-2">
                        {/* <p className="text-black px-2">Lender: </p> */}
                        <div className="flex-col w-full">
                            <input
                                id="lender"
                                maxLength={20}
                                className="bg-white rounded-md p-2 w-full"
                                placeholder='Lender'
                                type="text"
                                name="lender"
                                onChange={(e) => { setlender(e.target.value) }}
                            />
                        </div>
                    </div>

                    {/* Rate */}
                    <div className="flex p-2">
                        {/* <p className="text-black px-2">Rate: </p> */}
                        <div className="flex-col w-full">
                            <input
                                id="rate"
                                maxLength={20}
                                className="bg-white rounded-md p-2 w-full"
                                placeholder='Rate'
                                type="text"
                                name="rate"
                                onChange={(e) => { setrate(e.target.value) }}
                            />
                        </div>
                    </div>
                </div>

            </div>

            {/* 4th section */}
            <div className=' grid grid-cols-2 mx-auto'>
                {/* first column  */}
                <div className="sm:col-span-1 xs:col-span-2 xxs:col-span-2 xxxs:col-span-2">
                    <div className="flex p-2">
                        <p className="text-black px-2">DA Approved:</p>
                        <div className='flex space-x-2 pt-[2px]'>
                            <label className='text-xl gap-2 flex'>
                                <input
                                   id="da_yes"
                                    type='radio'
                                    value='yes'
                                    checked={!daShowWhyInput}
                                    onChange={() => handleDAOptionChange('yes')}
                                />
                                Yes
                            </label>
                            <label className='text-xl gap-2 flex'>
                                <input
                                    id="da_no"
                                    type='radio'
                                    value='no'
                                    checked={daShowWhyInput}
                                    onChange={() => handleDAOptionChange('no')}
                                />
                                No
                            </label>
                        </div>
                    </div>

                    {/* Conditionally render input form */}
                    {daShowWhyInput && (
                        <div className='my-4'>
                            {/* <p>When?</p> */}
                            <input
                                id='inputwhen1'
                                type='text'
                                value={daWhyInputValue}
                                placeholder='When?'
                                onChange={(e) => setDAWhyInputValue(e.target.value)}
                                className='rounded-md bg-white p-2 '
                            />
                        </div>
                    )}
                </div>

                {/* second column  */}
                <div className="sm:col-span-1 xs:col-span-2 xxs:col-span-2 xxxs:col-span-2">
                    <div className="flex p-2">
                        <p className="text-black px-2">BA/CC APPROVED:</p>
                        <div className='flex space-x-2 pt-[2px]'>
                            <label className='text-xl'>
                                <input
                                    id="bacc_yes"
                                    type='radio'
                                    value='yes'
                                    checked={!baCCShowWhyInput}
                                    onChange={() => handleBaCCOptionChange('yes')}
                                />
                                Yes
                            </label>
                            <label className='text-xl'>
                                <input
                                    id="bacc_no"
                                    type='radio'
                                    value='no'
                                    checked={baCCShowWhyInput}
                                    onChange={() => handleBaCCOptionChange('no')}
                                />
                                No
                            </label>
                        </div>
                    </div>
                    {/* Conditionally render input form */}
                    {baCCShowWhyInput && (
                        <div className='my-4'>
                            {/* <p>When?</p> */}
                            <input
                                id='inputwhen2'
                                type='text'
                                value={baCCWhyInputValue}
                                placeholder='When?'
                                onChange={(e) => setBaCCWhyInputValue(e.target.value)}
                                className='rounded-md bg-white p-2 '
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* 5th Section this section needs to be responsive */}
            <div className='grid grid-cols-2 mx-auto'>

                {/* 1st column */}
                <div className="sm:col-span-1 xs:col-span-2 xxs:col-span-2 xxxs:col-span-2  ">

                    {/* BUILD CONTRACT PRICE NET OF GST */}
                    <div className="flex justify-between items-end p-2">
                        {/* <p className="text-black px-1 text-sm">BUILD CONTRACT PRICE NET OF GST:</p> */}
                        <div className="flex-col w-full">
                            <input
                                id="build_contract_price_net_of_gst"
                                type="text"
                                maxLength={50}
                                className="bg-white rounded-md p-2 w-full"
                                placeholder='Build contract price Net of GST'
                                name="build_contract_price_net_of_gst"
                                onChange={(e) => { setcontractPriceGST(e.target.value) }}
                            />

                        </div>
                    </div>

                    {/* TOTAL OTHER COSTS (+ PLEASE COMPLETE COSTING WORKSHEET ) */}
                    <div className="flex flex-col justify-between items-start p-2">
                        <p className="text-black px-1 text-sm italic pb-1">(PLEASE COMPLETE COSTING WORKSHEET)</p>
                        <div className="flex-col w-full">
                            <input
                                id="total_other_cost"
                                type="text"
                                maxLength={50}
                                className="bg-white rounded-md p-2 w-full"
                                placeholder='Total other costs'
                                name="total_other_cost"
                                onChange={(e) => { settotalOtherCost(e.target.value) }}
                            />

                        </div>
                    </div>

                    {/* CONSTRUCTION PERIOD */}
                    <div className="flex justify-between items-end p-2">
                        {/* <p className="text-black px-1 text-sm">CONSTRUCTION PERIOD:</p> */}
                        <div className="flex-col w-full ">
                            <input
                                id="construction_period"
                                type="text"
                                maxLength={50}
                                className="bg-white rounded-md p-2 w-full"
                                placeholder='Construction period'
                                name="construction_period"
                                onChange={(e) => { setconstructionPeriod(e.target.value) }}
                            />

                        </div>
                    </div>

                </div>

                {/* 2nd column */}
                <div className="sm:col-span-1 xs:col-span-2 xxs:col-span-2 xxxs:col-span-2 ">

                    {/* PROPOSED COMMENCEMENT */}
                    <div className="flex justify-between items-end p-2">
                        {/* <p className="text-black px-1 text-sm">PROPOSED COMMENCEMENT:</p> */}
                        <div className="flex-col w-full">
                            <input
                                id="proposed_commencement"
                                type="text"
                                maxLength={50}
                                className="bg-white rounded-md p-2 w-full"
                                placeholder='Proposed Commencement'
                                name="proposed_commencement"
                                onChange={(e) => { setproposedCommencement(e.target.value) }}
                            />
                        </div>
                    </div>

                    {/* LOAN TERM REQUIRED */}
                    <div className="flex justify-between items-end p-2">
                        {/* <p className="text-black px-1 text-sm">LOAN TERM REQUIRED:</p> */}
                        <div className="flex-col w-full">
                            <input
                                id="loan_term_required"
                                type="text"
                                maxLength={50}
                                className="bg-white rounded-md p-2 w-full"
                                placeholder='Loan Term Required (months)'
                                name="loan_term_required"
                                onChange={(e) => { setloanTerm(e.target.value) }}
                            />
                        </div>
                        {/* <p className="text-black px-1 text-sm">MTHS</p> */}
                    </div>

                    {/* Builder Name */}
                    <div className="flex justify-between items-end p-2">
                        {/* <p className="text-black text-md">Builder Name:</p> */}
                        <div className="flex-col w-full">
                            <input
                                id="builder_name"
                                type="text"
                                maxLength={50}
                                className="bg-white rounded-md p-2 w-full"
                                placeholder='Builder Name'
                                name="builder_name"
                                onChange={(e) => { setbuilderName(e.target.value) }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* 6th Section */}
            <div className=' grid grid-cols-2 mx-auto'>

                {/* 1st column */}
                <div className="sm:col-span-1 xs:col-span-2 xxs:col-span-2 xxxs:col-span-2 ">

                    {/* FIXED PRICE / TIME CONTRACT: */}
                    <div className="flex justify-start p-2 items-center w-full">
                        <p className='text-black'>Fixed price / Time contract:</p>
                        <div id='fixed_price_or_time_contract' className='space-x-4 flex flex-row'>
                            <label htmlFor="fixed_price_yes" className='pl-3 flex gap-2 items-center text-xl'>
                                <input
                                    id='fixed_price_yes'
                                    type='radio'
                                    name='fixed_price_time_contract'
                                    value='fixed_price_yes'
                                    defaultChecked
                                    onChange={(e) => {setfixedPrice(true)}}
                                    className='w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500'
                                />
                                Yes
                            </label>
                            <label htmlFor="fixed_price_no" className='flex items-center gap-2 text-xl '>
                                <input
                                    id='fixed_price_no'
                                    type='radio'
                                    name='fixed_price_time_contract'
                                    value='fixed_price_no'
                                    onChange={(e)=>{setfixedPrice(false)}}
                                    className='w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500'
                                />
                                No
                            </label>
                        </div>
                    </div>


                    {/* PRE-SALES QUANTITY & EX GST VALUE: ACHIEVED */}
                    <div className="flex flex-col justify-between items-start p-2">
                        <p className="text-black ">Pre-sales quantity & Ex GST Value:</p>
                        <div className="flex-col w-full">
                            <input
                                id="presale_quantity_and_ex_gst_value_achieved"
                                type="text"
                                maxLength={50}
                                className="bg-white rounded-md p-2 w-full"
                                placeholder='Achieved'
                                name="total_other_cost"
                                onChange={(e) => { setpresaleAchieved(e.target.value) }}
                            />

                        </div>
                    </div>

                    {/* PRE-SALES QUANTITY & EX GST VALUE: Proposed */}
                    <div className="flex justify-between items-end p-2">
                        {/* <p className="text-black px-1 text-sm">PROPOSED:</p> */}
                        <div className="flex-col w-full">
                            <input
                                id="presale_quantity_and_ex_gst_value_proposed"
                                type="text"
                                maxLength={50}
                                className="bg-white rounded-md p-2 w-full"
                                placeholder='Proposed'
                                name="presale_quantity_and_ex_gst_value_proposed"
                                onChange={(e) => { setpresaleProposed(e.target.value) }}
                            />

                        </div>
                    </div>

                </div>

                {/* 2nd column */}
                <div className="sm:col-span-1 xs:col-span-2 xxs:col-span-2 xxxs:col-span-2 ">

                    {/* INTEREST PAYMENTS: */}
                    <div className="flex justify-start items-center p-2 w-full">
                        <p className='text-black'>Interest Payment:</p>
                        <div id='interest_payments' className='space-x-4 flex flex-row'>
                            <label htmlFor="interest_offsite_income" className='pl-3 flex gap-2 items-center text-xl'>
                                <input
                                    id='interest_offsite_income'
                                    type='radio'
                                    name='interest_payments'
                                    value='interest_offsite_income'
                                    defaultChecked
                                    onChange={(e)=>{setinterestPayment(e.target.value)}}
                                    className='w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500'
                                />
                                Offsite Income
                            </label>
                            <label htmlFor="interest_capitalisation" className='flex items-center gap-2 text-xl'>
                                <input
                                    id='interest_capitalisation'
                                    type='radio'
                                    name='interest_payments'
                                    value='interest_capitalisation'
                                    onChange={(e)=>{setinterestPayment(e.target.value)}}
                                    className='w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500'
                                />
                                Capitalisation
                            </label>
                        </div>
                    </div>

                    {/* MARKETING AGENT */}
                    <div className="flex justify-between items-end p-2">
                        {/* <p className="text-black px-1 text-sm">MARKETING AGENT:</p> */}
                        <div className="flex-col w-full">
                            <input
                                id="marketing_agent"
                                type="text"
                                maxLength={50}
                                className="bg-white rounded-md p-2 w-full"
                                placeholder='Marketing Agent'
                                name="marketing_agent"
                                onChange={(e) => { setmarketingAgent(e.target.value) }}
                            />
                        </div>
                    </div>

                    {/* APPLICATION ALSO SUBMITTED TO */}
                    <div className="flex justify-between items-end p-2">
                        {/* <p className="text-black px-1 text-sm">APPLICATION ALSO SUBMITTED TO:</p> */}
                        <div className="flex-col w-full">
                            <input
                                id="application_also_submitted_to"
                                type="text"
                                maxLength={50}
                                className="bg-white rounded-md p-2 w-full"
                                placeholder='Application Also Submitted To'
                                name="application_also_submitted_to"
                                onChange={(e) => { setapplicationAlsoSubmitted(e.target.value) }}
                            />
                        </div>
                    </div>
                </div>

                {/* 3rd column */}
                <div className="col-span-2 ">
                    {/* Notes */}
                    <div className='flex-row p-2'>
                        {/* <p className='text-black px-2 text-base'><span className='font-bold'>NOTES:</span> (ANYTHING ELSE WE NEED TO KNOW?): CREDIT RATING ISSUES, LEGAL ISSUES, COMPANY IS /WAS IN RECEIVERSHIP, RESCINDED PRESALES , LITTLE EXPERIENCE, VENDOR FINANCE, SETTLEMENT OVER DUE</p> */}
                        <div className='flex-col w-full'>
                            <textarea
                                id='notes'
                                name='notes'
                                rows={5}
                                cols={60}
                                placeholder='NOTES: (Anything else we need to know?) Credit rating issues, Legal issues, Company is/was in receivership, Rescinded presales, Little experience, Vendor finance, Settlement over due'
                                maxLength={300}
                                className='bg-white rounded-md resize-none p-2 font-Jost text-[22px] text-[#000000] w-[100%]'
                                onChange={(e) => { setnotes(e.target.value) }}
                            />
                        </div>
                    </div>

                    {/* Submit Button */} 
                    <div className='flex justify-center p-3'>
                        <button
                            onClick={updateFormData}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
      
                            className={`font-Jost flex justify-center items-center rounded-[18px] bg-[#CDA274] hover:bg-[#434950] 
                            py-[26px] px-[37px] xs:text-[18px] xxs:text-[14px] xxxs:text-[14px]`}
                        >Save Form
                        </button>
                    </div>
                </div>
            </div>
            
   
        </form>
    );
}
