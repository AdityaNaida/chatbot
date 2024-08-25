import "./newPrompt.css";

const NewPrompt = () => {
  return (
    <>
      Test
      <div className="newPrompt">
        <form action="" className="newForm">
          <div>
            <label htmlFor="file">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="26"
                viewBox="0 -960 960 960"
                width="26"
                fill="#FFFFFF"
              >
                <path d="M706.92-334.23q0 97.44-67.81 165.83-67.8 68.4-165.07 68.4t-165.27-68.4q-68-68.39-68-165.83v-359.62q0-69.23 48.08-117.69Q336.92-860 406.15-860q69.23 0 117.31 48.46t48.08 117.69v340.39q0 40.61-28.29 69.34-28.3 28.73-68.96 28.73-40.67 0-69.4-28.53-28.73-28.53-28.73-69.54v-351.15h59.99v351.15q0 16.08 10.81 27.08t26.89 11q16.07 0 26.88-11 10.81-11 10.81-27.08v-340.77q-.62-44.31-30.78-75.04Q450.6-800 406.15-800q-44.26 0-74.82 30.92-30.56 30.93-30.56 75.23v359.62q-.62 72.54 50.15 123.38Q401.69-160 474.18-160q71.46 0 121.49-50.85 50.02-50.84 51.25-123.38v-370.38h60v370.38Z" />
              </svg>
            </label>
            <input type="file" multiple={false} id="file" hidden />
            <input type="text" placeholder="Message Aditya AI..." required />
          </div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#2F2F2F"
            >
              <path d="M450-180v-485.08L222.15-437.23 180-480l300-300 300 300-42.15 42.77L510-665.08V-180h-60Z" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
};

export default NewPrompt;
