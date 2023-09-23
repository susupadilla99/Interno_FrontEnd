'use client'
import { ChangeEvent, useState, useEffect } from 'react';
import { ConstructionFinanceForm } from './MultistepForm';

const FileUploadSingle = ({ title, developerName, isDone, filesUrl, formData, setFormData }: { title: any, developerName: any, isDone: any, filesUrl: any, formData?: ConstructionFinanceForm, setFormData: any }) => {
  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);
  const [file3, setFile3] = useState<File | null>(null);
  const [file4, setFile4] = useState<File | null>(null);
  const [file5, setFile5] = useState<File | null>(null);
  const [file6, setFile6] = useState<File | null>(null);
  const [file7, setFile7] = useState<File | null>(null);
  const [file8, setFile8] = useState<File | null>(null);
  const [file9, setFile9] = useState<File | null>(null);
  const [file10, setFile10] = useState<File | null>(null);
  const [file11, setFile11] = useState<File | null>(null);
  const [file12, setFile12] = useState<File | null>(null);
  const [file13, setFile13] = useState<File | null>(null);

  const [file1Accepted, setFile1Accepted] = useState<boolean>(false);
  const [file2Accepted, setFile2Accepted] = useState<boolean>(false);
  const [file3Accepted, setFile3Accepted] = useState<boolean>(false);
  const [file4Accepted, setFile4Accepted] = useState<boolean>(false);
  const [file5Accepted, setFile5Accepted] = useState<boolean>(false);
  const [file6Accepted, setFile6Accepted] = useState<boolean>(false);
  const [file7Accepted, setFile7Accepted] = useState<boolean>(false);
  const [file8Accepted, setFile8Accepted] = useState<boolean>(false);
  const [file9Accepted, setFile9Accepted] = useState<boolean>(false);
  const [file10Accepted, setFile10Accepted] = useState<boolean>(false);
  const [file11Accepted, setFile11Accepted] = useState<boolean>(false);
  const [file12Accepted, setFile12Accepted] = useState<boolean>(false);
  const [file13Accepted, setFile13Accepted] = useState<boolean>(false);

  const allowedFileTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/x-zip-compressed'];

  const [JWT, setJWT] = useState<string>();

  const fileChecks = [
    file1Accepted, file2Accepted, file3Accepted, file4Accepted, file5Accepted,
    file6Accepted, file7Accepted, file8Accepted, file9Accepted, file10Accepted,
    file11Accepted, file12Accepted, file13Accepted,
  ];

  const [isClicked, setIsClicked] = useState<boolean>(false)

  const fileUrlArr: string[] = new Array<string>();

  //check if file type is correct
  const handleFile1Change = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0]
      const maxSizeInBytes = 2 * 1024 * 1024;
      const fileSizeInBytes = selectedFile.size
      setFile1(selectedFile)

      if (selectedFile && allowedFileTypes.includes(selectedFile.type) && fileSizeInBytes < maxSizeInBytes) {
        setFile1Accepted(true)

      }
      else { setFile1Accepted(false) }
    }


  };

  const handleFile2Change = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0]
      const maxSizeInBytes = 2 * 1024 * 1024;
      const fileSizeInBytes = selectedFile.size
      setFile2(selectedFile)

      if (selectedFile && allowedFileTypes.includes(selectedFile.type) && fileSizeInBytes < maxSizeInBytes) {
        setFile2Accepted(true)
      }
      else { setFile2Accepted(false) }
    }
  };

  const handleFile3Change = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0]
      const maxSizeInBytes = 2 * 1024 * 1024;
      const fileSizeInBytes = selectedFile.size
      setFile3(selectedFile)

      if (selectedFile && allowedFileTypes.includes(selectedFile.type) && fileSizeInBytes < maxSizeInBytes) {
        setFile3Accepted(true)
      }
      else { setFile3Accepted(false) }
    }
  };

  const handleFile4Change = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0]
      const maxSizeInBytes = 2 * 1024 * 1024;
      const fileSizeInBytes = selectedFile.size
      setFile4(selectedFile)

      if (selectedFile && allowedFileTypes.includes(selectedFile.type) && fileSizeInBytes < maxSizeInBytes) {
        setFile4Accepted(true)
      }
      else { setFile4Accepted(false) }
    }
  };

  const handleFile5Change = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0]
      const maxSizeInBytes = 2 * 1024 * 1024;
      const fileSizeInBytes = selectedFile.size
      setFile5(selectedFile)

      if (selectedFile && allowedFileTypes.includes(selectedFile.type) && fileSizeInBytes < maxSizeInBytes) {
        setFile5Accepted(true)
      }
      else { setFile5Accepted(false) }
    }
  };

  const handleFile6Change = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0]
      const maxSizeInBytes = 2 * 1024 * 1024;
      const fileSizeInBytes = selectedFile.size
      setFile6(selectedFile)

      if (selectedFile && allowedFileTypes.includes(selectedFile.type) && fileSizeInBytes < maxSizeInBytes) {
        setFile6Accepted(true)
      }
      else { setFile6Accepted(false) }
    }
  };

  const handleFile7Change = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0]
      const maxSizeInBytes = 2 * 1024 * 1024;
      const fileSizeInBytes = selectedFile.size
      setFile7(selectedFile)

      if (selectedFile && allowedFileTypes.includes(selectedFile.type) && fileSizeInBytes < maxSizeInBytes) {
        setFile7Accepted(true)
      }
      else { setFile7Accepted(false) }
    }
  };

  const handleFile8Change = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0]
      const maxSizeInBytes = 2 * 1024 * 1024;
      const fileSizeInBytes = selectedFile.size
      setFile8(selectedFile)

      if (selectedFile && allowedFileTypes.includes(selectedFile.type) && fileSizeInBytes < maxSizeInBytes) {
        setFile8Accepted(true)
      }
      else { setFile8Accepted(false) }
    }
  };

  const handleFile9Change = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0]
      const maxSizeInBytes = 2 * 1024 * 1024;
      const fileSizeInBytes = selectedFile.size
      setFile9(selectedFile)

      if (selectedFile && allowedFileTypes.includes(selectedFile.type) && fileSizeInBytes < maxSizeInBytes) {
        setFile9Accepted(true)
      }
      else { setFile9Accepted(false) }
    }
  };

  const handleFile10Change = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0]
      const maxSizeInBytes = 2 * 1024 * 1024;
      const fileSizeInBytes = selectedFile.size
      setFile10(selectedFile)

      if (selectedFile && allowedFileTypes.includes(selectedFile.type) && fileSizeInBytes < maxSizeInBytes) {
        setFile10Accepted(true)
      }
      else { setFile10Accepted(false) }
    }
  };

  const handleFile11Change = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0]
      const maxSizeInBytes = 2 * 1024 * 1024;
      const fileSizeInBytes = selectedFile.size
      setFile11(selectedFile)

      if (selectedFile && allowedFileTypes.includes(selectedFile.type) && fileSizeInBytes < maxSizeInBytes) {
        setFile11Accepted(true)
      }
      else { setFile11Accepted(false) }
    }
  };

  const handleFile12Change = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0]
      const maxSizeInBytes = 2 * 1024 * 1024;
      const fileSizeInBytes = selectedFile.size
      setFile12(selectedFile)

      if (selectedFile && allowedFileTypes.includes(selectedFile.type) && fileSizeInBytes < maxSizeInBytes) {
        setFile12Accepted(true)
      }
      else { setFile12Accepted(false) }
    }
  };

  const handleFile13Change = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0]
      const maxSizeInBytes = 2 * 1024 * 1024;
      const fileSizeInBytes = selectedFile.size
      setFile13(selectedFile)

      if (selectedFile && allowedFileTypes.includes(selectedFile.type) && fileSizeInBytes < maxSizeInBytes) {
        setFile13Accepted(true)
      }
      else { setFile13Accepted(false) }
    }
  };

  // Get JWT from maqro backend server
  useEffect(() => {
    fetch('https://backend.maqro.com.au/wp-json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: 'daniel.le@maqro.com.au',
        password: 'Test1234'
      }),
      next: { revalidate: 10 }
    })
      .then(res => res.json())
      .then(data => {
        setJWT(data.token);
      });
  }, []);

  const handleUploadAllFilesClick = async () => {
    //check again if all files are accepted
    const allFilesAccepted = fileChecks.every((fileAccepted) => fileAccepted);

    //need to find a way to get the url of the files which is the response when file is uploaded in the wordpress backend
    if (allFilesAccepted) {
      const allFiles: any = [file1, file2, file3, file4, file5, file6, file7, file8, file9, file10, file11, file12, file13]
      allFiles.forEach(async (file: File, index: any) => {
        if (!file || !JWT) { return; }

        const requestFormData = new FormData();
        requestFormData.append('title', `${developerName}_${title[index]}`);
        requestFormData.append('caption', `Developer Name: ${developerName}, File: ${title[index]}`);
        requestFormData.append('file', file);

        try {
          const response = await fetch('https://backend.maqro.com.au/wp-json/wp/v2/media', {
            method: 'POST',
            body: requestFormData,
            headers: { 'Authorization': `Bearer ${JWT}` }
          });

          if (response.ok) {
            const data = await response.json();
            fileUrlArr[index] = data.source_url;
          } else {
            alert(`Error uploading the file: ${response.statusText}`);
          }

        } catch (err) {
          alert(`Error uploading the file: ${err}`);
        }
        
        filesUrl = await fileUrlArr
        isDone(allFilesAccepted)
        setIsClicked(true)

        const updatedData: ConstructionFinanceForm = {
          // Section 1
          developerName: formData?.developerName,
          email: formData?.email,
          projectDescription: formData?.projectDescription,
          mobile: formData?.mobile,
          purpose: formData?.purpose,
          currentStatus: formData?.currentStatus,

          // Section 2
          locality: formData?.locality,
          localCouncil: formData?.localCouncil,
          guarantors: formData?.guarantors,
          zoning: formData?.zoning,
          borrower: formData?.borrower,
          mortgagor: formData?.mortgagor,
          buildabilityIssues: formData?.buildabilityIssues,

          // Section 3
          purchasePriceGST: formData?.purchasePriceGST,
          grossRealisationGST: formData?.grossRealisationGST,
          currentMortgage: formData?.currentMortgage,
          landGST: formData?.landGST,
          lender: formData?.lender,
          rate: formData?.rate,

          // Section 4
          daApprove: formData?.daApprove,
          baccApprove: formData?.baccApprove,

          // Section 5
          contractPriceGST: formData?.contractPriceGST,
          totalOtherCost: formData?.totalOtherCost,
          constructionPeriod: formData?.constructionPeriod,
          proposedCommencement: formData?.proposedCommencement,
          loanTerm: formData?.loanTerm,
          builderName: formData?.builderName,

          // Section 6
          fixedPrice: formData?.fixedPrice,
          interestPayment: formData?.interestPayment,
          presaleAchieved: formData?.presaleAchieved,
          presaleProposed: formData?.presaleProposed,
          marketingAgent: formData?.marketingAgent,
          applicationAlsoSubmitted: formData?.applicationAlsoSubmitted,
          notes: formData?.notes,

          // ID Documents
          fileURLs: await filesUrl
        }

        setFormData(updatedData)
      })

      // alert('Uploading the files now...')
    } else {
      // alert('Try Again...Check your files...')
    }
  }

  return (
    <section className='flex justify-center items-center flex-col'>
      <h3 className='text-[#CDA274]'>Accepts PDF, DOCX and ZIP files and File size up to 2MB ONLY </h3>
      <div className='max-w-5xl flex justify-center items-start flex-col'>

        {/* File1 */}
        <div className='min-w-[260px] p-3'>
          <p className='px-2 xxxs:text-[12px] xxs:text-[14px] xs:text-[16px]'>{title[0]}</p>
          <form className=' p-3 flex items-start justify-start gap-3 xxxs:flex-col xxs:flex-col xs:flex-col md:flex-row'>
            <input
              type="file"
              name='file'
              onChange={handleFile1Change}
              accept='.pdf,.docx,.zip'
              className='max-w-[125px] ' />
            <p className='p-sm'>{file1 && `${file1.name}`}</p>


            {file1 !== null ?
              (
                file1Accepted === true ? (
                  <div className='flex items-center justify-start'>
                    <p className='p-sm text-green-600'>File Accepted</p>
                    <svg className="h-5 w-5 shrink-0 text-green-600 dark:text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                ) : (
                  <div className='flex items-center justify-start'>
                    <p className='p-sm text-red-600'>File is not Accepted </p>
                    <svg className="h-5 w-5 shrink-0 text-red-600 dark:text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )
              ) : (
                <></>
              )
            }
          </form>
        </div>

        {/* File2 */}
        <div className='min-w-[260px] p-3'>
          <p className='px-2 xxxs:text-[12px] xxs:text-[14px] xs:text-[16px]'>{title[1]}</p>
          <form className=' p-3 flex items-start justify-start gap-3 xxxs:flex-col xxs:flex-col xs:flex-col md:flex-row'>
            <input
              type="file"
              name='file'
              onChange={handleFile2Change}
              accept='.pdf,.docx,.zip'
              className='max-w-[125px]' />
            <p className='p-sm'>{file2 && `${file2.name}`}</p>

            {file2 !== null ?
              (
                file2Accepted === true ? (
                  <div className='flex items-center justify-start'>
                    <p className='p-sm text-green-600'>File Accepted</p>
                    <svg className="h-5 w-5 shrink-0 text-green-600 dark:text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                ) : (
                  <div className='flex items-center justify-start'>
                    <p className='p-sm text-red-600'>File is not Accepted </p>
                    <svg className="h-5 w-5 shrink-0 text-red-600 dark:text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )
              ) : (
                <></>
              )
            }
          </form>
        </div>

        {/* File3 */}
        <div className='min-w-[260px] p-3'>
          <p className='px-2 xxxs:text-[12px] xxs:text-[14px] xs:text-[16px]'>{title[2]}</p>
          <form className=' p-3 flex items-start justify-start gap-3 xxxs:flex-col xxs:flex-col xs:flex-col md:flex-row'>
            <input
              type="file"
              name='file'
              onChange={handleFile3Change}
              accept='.pdf,.docx,.zip'
              className='max-w-[125px]' />
            <p className='p-sm'>{file3 && `${file3.name}`}</p>

            {file3 !== null ?
              (
                file3Accepted === true ? (
                  <div className='flex items-center justify-start'>
                    <p className='p-sm text-green-600'>File Accepted</p>
                    <svg className="h-5 w-5 shrink-0 text-green-600 dark:text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                ) : (
                  <div className='flex items-center justify-start'>
                    <p className='p-sm text-red-600'>File is not Accepted </p>
                    <svg className="h-5 w-5 shrink-0 text-red-600 dark:text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )
              ) : (
                <></>
              )
            }
          </form>
        </div>

        {/* File4 */}
        <div className='min-w-[260px] p-3'>
          <p className='px-2 xxxs:text-[12px] xxs:text-[14px] xs:text-[16px]'>{title[3]}</p>
          <form className=' p-3 flex items-start justify-start gap-3 xxxs:flex-col xxs:flex-col xs:flex-col md:flex-row'>
            <input
              type="file"
              name='file'
              onChange={handleFile4Change}
              accept='.pdf,.docx,.zip'
              className='max-w-[125px]' />
            <p className='p-sm'>{file4 && `${file4.name}`}</p>

            {file4 !== null ?
              (
                file4Accepted === true ? (
                  <div className='flex items-center justify-start'>
                    <p className='p-sm text-green-600'>File Accepted</p>
                    <svg className="h-5 w-5 shrink-0 text-green-600 dark:text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                ) : (
                  <div className='flex items-center justify-start'>
                    <p className='p-sm text-red-600'>File is not Accepted </p>
                    <svg className="h-5 w-5 shrink-0 text-red-600 dark:text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )
              ) : (
                <></>
              )
            }
          </form>
        </div>

        {/* File5 */}
        <div className='min-w-[260px] p-3'>
          <p className='px-2 xxxs:text-[12px] xxs:text-[14px] xs:text-[16px]'>{title[4]}</p>
          <form className=' p-3 flex items-start justify-start gap-3 xxxs:flex-col xxs:flex-col xs:flex-col md:flex-row'>
            <input
              type="file"
              name='file'
              onChange={handleFile5Change}
              accept='.pdf,.docx,.zip'
              className='max-w-[125px]' />
            <p className='p-sm'>{file5 && `${file5.name}`}</p>

            {file5 !== null ?
              (
                file5Accepted === true ? (
                  <div className='flex items-center justify-start'>
                    <p className='p-sm text-green-600'>File Accepted</p>
                    <svg className="h-5 w-5 shrink-0 text-green-600 dark:text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                ) : (
                  <div className='flex items-center justify-start'>
                    <p className='p-sm text-red-600'>File is not Accepted </p>
                    <svg className="h-5 w-5 shrink-0 text-red-600 dark:text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )
              ) : (
                <></>
              )
            }
          </form>
        </div>

        {/* File6 */}
        <div className='min-w-[260px] p-3'>
          <p className='px-2 xxxs:text-[12px] xxs:text-[14px] xs:text-[16px]'>{title[5]}</p>
          <form className=' p-3 flex items-start justify-start gap-3 xxxs:flex-col xxs:flex-col xs:flex-col md:flex-row'>
            <input
              type="file"
              name='file'
              onChange={handleFile6Change}
              accept='.pdf,.docx,.zip'
              className='max-w-[125px]' />
            <p className='p-sm'>{file6 && `${file6.name}`}</p>

            {file6 !== null ?
              (
                file6Accepted === true ? (
                  <div className='flex items-center justify-start'>
                    <p className='p-sm text-green-600'>File Accepted</p>
                    <svg className="h-5 w-5 shrink-0 text-green-600 dark:text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                ) : (
                  <div className='flex items-center justify-start'>
                    <p className='p-sm text-red-600'>File is not Accepted </p>
                    <svg className="h-5 w-5 shrink-0 text-red-600 dark:text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )
              ) : (
                <></>
              )
            }
          </form>
        </div>

        {/* File7 */}
        <div className='min-w-[260px] p-3'>
          <p className='px-2 xxxs:text-[12px] xxs:text-[14px] xs:text-[16px]'>{title[6]}</p>
          <form className=' p-3 flex items-start justify-start gap-3 xxxs:flex-col xxs:flex-col xs:flex-col md:flex-row'>
            <input
              type="file"
              name='file'
              onChange={handleFile7Change}
              accept='.pdf,.docx,.zip'
              className='max-w-[125px]' />
            <p className='p-sm'>{file7 && `${file7.name}`}</p>

            {file7 !== null ?
              (
                file7Accepted === true ? (
                  <div className='flex items-center justify-start'>
                    <p className='p-sm text-green-600'>File Accepted</p>
                    <svg className="h-5 w-5 shrink-0 text-green-600 dark:text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                ) : (
                  <div className='flex items-center justify-start'>
                    <p className='p-sm text-red-600'>File is not Accepted </p>
                    <svg className="h-5 w-5 shrink-0 text-red-600 dark:text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )
              ) : (
                <></>
              )
            }
          </form>
        </div>

        {/* File8 */}
        <div className='min-w-[260px] p-3'>
          <p className='px-2 xxxs:text-[12px] xxs:text-[14px] xs:text-[16px]'>{title[7]}</p>
          <form className=' p-3 flex items-start justify-start gap-3 xxxs:flex-col xxs:flex-col xs:flex-col md:flex-row'>
            <input
              type="file"
              name='file'
              onChange={handleFile8Change}
              accept='.pdf,.docx,.zip'
              className='max-w-[125px]' />
            <p className='p-sm'>{file8 && `${file8.name}`}</p>

            {file8 !== null ?
              (
                file8Accepted === true ? (
                  <div className='flex items-center justify-start'>
                    <p className='p-sm text-green-600'>File Accepted</p>
                    <svg className="h-5 w-5 shrink-0 text-green-600 dark:text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                ) : (
                  <div className='flex items-center justify-start'>
                    <p className='p-sm text-red-600'>File is not Accepted </p>
                    <svg className="h-5 w-5 shrink-0 text-red-600 dark:text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )
              ) : (
                <></>
              )
            }
          </form>
        </div>

        {/* File9 */}
        <div className='min-w-[260px] p-3'>
          <p className='px-2 xxxs:text-[12px] xxs:text-[14px] xs:text-[16px]'>{title[8]}</p>
          <form className=' p-3 flex items-start justify-start gap-3 xxxs:flex-col xxs:flex-col xs:flex-col md:flex-row'>
            <input
              type="file"
              name='file'
              onChange={handleFile9Change}
              accept='.pdf,.docx,.zip'
              className='max-w-[125px]' />
            <p className='p-sm'>{file9 && `${file9.name}`}</p>

            {file9 !== null ?
              (
                file9Accepted === true ? (
                  <div className='flex items-center justify-start'>
                    <p className='p-sm text-green-600'>File Accepted</p>
                    <svg className="h-5 w-5 shrink-0 text-green-600 dark:text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                ) : (
                  <div className='flex items-center justify-start'>
                    <p className='p-sm text-red-600'>File is not Accepted </p>
                    <svg className="h-5 w-5 shrink-0 text-red-600 dark:text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )
              ) : (
                <></>
              )
            }
          </form>
        </div>

        {/* File10 */}
        <div className='min-w-[260px] p-3'>
          <p className='px-2 xxxs:text-[12px] xxs:text-[14px] xs:text-[16px]'>{title[9]}</p>
          <form className=' p-3 flex items-start justify-start gap-3 xxxs:flex-col xxs:flex-col xs:flex-col md:flex-row'>
            <input
              type="file"
              name='file'
              onChange={handleFile10Change}
              accept='.pdf,.docx,.zip'
              className='max-w-[125px]' />
            <p className='p-sm'>{file10 && `${file10.name}`}</p>

            {file10 !== null ?
              (
                file10Accepted === true ? (
                  <div className='flex items-center justify-start'>
                    <p className='p-sm text-green-600'>File Accepted</p>
                    <svg className="h-5 w-5 shrink-0 text-green-600 dark:text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                ) : (
                  <div className='flex items-center justify-start'>
                    <p className='p-sm text-red-600'>File is not Accepted </p>
                    <svg className="h-5 w-5 shrink-0 text-red-600 dark:text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )
              ) : (
                <></>
              )
            }
          </form>
        </div>

        {/* File11 */}
        <div className='min-w-[260px] p-3'>
          <p className='px-2 xxxs:text-[12px] xxs:text-[14px] xs:text-[16px]'>{title[10]}</p>
          <form className=' p-3 flex items-start justify-start gap-3 xxxs:flex-col xxs:flex-col xs:flex-col md:flex-row'>
            <input
              type="file"
              name='file'
              onChange={handleFile11Change}
              accept='.pdf,.docx,.zip'
              className='max-w-[125px]' />
            <p className='p-sm'>{file11 && `${file11.name}`}</p>

            {file11 !== null ?
              (
                file11Accepted === true ? (
                  <div className='flex items-center justify-start'>
                    <p className='p-sm text-green-600'>File Accepted</p>
                    <svg className="h-5 w-5 shrink-0 text-green-600 dark:text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                ) : (
                  <div className='flex items-center justify-start'>
                    <p className='p-sm text-red-600'>File is not Accepted </p>
                    <svg className="h-5 w-5 shrink-0 text-red-600 dark:text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )
              ) : (
                <></>
              )
            }
          </form>
        </div>

        {/* File12 */}
        <div className='min-w-[260px] p-3'>
          <p className='px-2 xxxs:text-[12px] xxs:text-[14px] xs:text-[16px]'>{title[11]}</p>
          <form className=' p-3 flex items-start justify-start gap-3 xxxs:flex-col xxs:flex-col xs:flex-col md:flex-row'>
            <input
              type="file"
              name='file'
              onChange={handleFile12Change}
              accept='.pdf,.docx,.zip'
              className='max-w-[125px]' />
            <p className='p-sm'>{file12 && `${file12.name}`}</p>

            {file12 !== null ?
              (
                file12Accepted === true ? (
                  <div className='flex items-center justify-start'>
                    <p className='p-sm text-green-600'>File Accepted</p>
                    <svg className="h-5 w-5 shrink-0 text-green-600 dark:text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                ) : (
                  <div className='flex items-center justify-start'>
                    <p className='p-sm text-red-600'>File is not Accepted </p>
                    <svg className="h-5 w-5 shrink-0 text-red-600 dark:text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )
              ) : (
                <></>
              )
            }
          </form>
        </div>

        {/* File13 */}
        <div className='min-w-[260px] p-3'>
          <p className='px-2 xxxs:text-[12px] xxs:text-[14px] xs:text-[16px]'>{title[12]}</p>
          <form className=' p-3 flex items-start justify-start gap-3 xxxs:flex-col xxs:flex-col xs:flex-col md:flex-row'>
            <input
              type="file"
              name='file'
              onChange={handleFile13Change}
              accept='.pdf,.docx,.zip'
              className='max-w-[125px]' />
            <p className='p-sm'>{file13 && `${file13.name}`}</p>

            {file13 !== null ?
              (
                file13Accepted === true ? (
                  <div className='flex items-center justify-start'>
                    <p className='p-sm text-green-600'>File Accepted</p>
                    <svg className="h-5 w-5 shrink-0 text-green-600 dark:text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                ) : (
                  <div className='flex items-center justify-start'>
                    <p className='p-sm text-red-600'>File is not Accepted </p>
                    <svg className="h-5 w-5 shrink-0 text-red-600 dark:text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )
              ) : (
                <></>
              )
            }
          </form>



        </div>

      </div>

      <button
        className={`font-Jost flex justify-center items-center rounded-[18px] bg-[#CDA274] 
        py-[26px] px-[37px] xs:text-[18px] xxs:text-[14px] xxxs:text-[14px] ${fileChecks.every((fileAccepted) => fileAccepted) ? "opacity-100 hover:bg-[#434950]" : "opacity-30 "}
        ${isClicked ? "hidden" : ""}`}
        onClick={handleUploadAllFilesClick}
        disabled={!fileChecks.every((fileAccepted) => fileAccepted)}
      >
        Upload All Files
      </button>
    </section>

  );
};

export default FileUploadSingle