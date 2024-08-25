import "./dashboardpage.css";

const Dashboardpage = () => {
  return (
    <div className="dashboardpage">
      <div className="texts">
        <div className="logo">
          <img
            src="/logo.png"
            alt="logo image"
            height={100}
            width={100}
            decoding="async"
            loading="lazy"
          />
          <h1>ADITYA AI</h1>
        </div>

        <div className="options">
          <div className="option">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="rgb(203, 139, 208)"
            >
              <path d="M212.31-100q-29.92 0-51.12-21.19Q140-142.39 140-172.31v-455.38q0-29.92 21.19-51.12Q182.39-700 212.31-700H300q0-74.92 52.54-127.46Q405.08-880 480-880q74.92 0 127.46 52.54Q660-774.92 660-700h87.69q29.92 0 51.12 21.19Q820-657.61 820-627.69v455.38q0 29.92-21.19 51.12Q777.61-100 747.69-100H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-455.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v455.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM480-420q74.92 0 127.46-52.54Q660-525.08 660-600h-60q0 50-35 85t-85 35q-50 0-85-35t-35-85h-60q0 74.92 52.54 127.46Q405.08-420 480-420ZM360-700h240q0-50-35-85t-85-35q-50 0-85 35t-35 85ZM200-160v-480 480Z" />
            </svg>
            <p>Pick outfit to look good on camera</p>
          </div>
          <div className="option">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="rgb(118, 208, 235)"
            >
              <path d="M212.31-140Q182-140 161-161q-21-21-21-51.31v-535.38Q140-778 161-799q21-21 51.31-21h535.38Q778-820 799-799q21 21 21 51.31v535.38Q820-182 799-161q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-535.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v535.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM270-290h423.07L561.54-465.38 449.23-319.23l-80-102.31L270-290Zm-70 90v-560 560Zm140-370q20.77 0 35.38-14.62Q390-599.23 390-620q0-20.77-14.62-35.38Q360.77-670 340-670q-20.77 0-35.38 14.62Q290-640.77 290-620q0 20.77 14.62 35.38Q319.23-570 340-570Z" />
            </svg>
            <p>Create an image for my presentation</p>
          </div>
          <div className="option">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="rgb(203, 139, 208)"
            >
              <path d="M330-250h300v-60H330v60Zm0-160h300v-60H330v60Zm-77.69 310Q222-100 201-121q-21-21-21-51.31v-615.38Q180-818 201-839q21-21 51.31-21H570l210 210v477.69Q780-142 759-121q-21 21-51.31 21H252.31ZM540-620v-180H252.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v615.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85h455.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-620H540ZM240-800v180-180V-160v-640Z" />
            </svg>
            <p>Help me understand a technical document</p>
          </div>
        </div>
      </div>
      <div className="formContainer">
        <form action="">
          <input type="text" placeholder="Message Aditya AI..." required />
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
    </div>
  );
};

export default Dashboardpage;
