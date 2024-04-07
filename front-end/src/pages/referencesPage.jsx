import jobPostingData from "../data/jobPostingtext";
import screeningData from "../data/screeningText";
import interviewData from "../data/interviewtext";
import postSelectionData from "../data/postSelectionText";

function ReferencesPage() {
  return (
    <div className="References Page bg-gray-900 min-h-screen text-neutral-100 text-left flex flex-col space-y-8">
      <div>
        <br></br>
        <h1 className='text-center font-extrabold text-pink-400'>Job Posting References</h1>
          <div className='flex flex-col space-y-4'>
            {jobPostingData.map((item) => (
              <p key={item.id} className='flex flex-col space-y-4 '>{item.text}</p>
            ))}
          </div>
        </div>
        <div>
        <h1 className='text-center font-extrabold text-pink-400'>Screening References</h1>
          <div className='flex flex-col space-y-4'>
            {screeningData.map((item) => (
              <p key={item.id}>{item.text}</p>
            ))}
          </div> 
        </div>
        <div>
        <h1 className='text-center font-extrabold text-pink-400'>Interviewing References</h1>
          <div className='flex flex-col space-y-4'>
            {interviewData.map((item) => (
              <p key={item.id}>{item.text}</p>
            ))}
          </div>
        </div>
        <div>
        <h1 className='text-center font-extrabold text-pink-400'>Selection and Post-Selection References</h1>
          <div className='flex flex-col space-y-4'>
           {postSelectionData.map((item) => (
            <p key={item.id}>{item.text}</p>
          ))} 
          </div>
        </div>
    </div>
  );
}

export default ReferencesPage;
