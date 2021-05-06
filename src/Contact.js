import React, { useState } from "react";
import { Zoom } from "react-reveal";
import ReactLoading from "react-loading";
import emailjs from "emailjs-com";
import apiKeys from "./apikeys";

import "./css/Contact.css";

function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [missingName, setMissingName] = useState(false);
  const [missingEmail, setMissingEmail] = useState(false);
  const [missingMessage, setMissingMessage] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!userName || userName === "") {
      setMissingName(true);
    }
    if (!userEmail || userEmail === "") {
      setMissingEmail(true);
    }
    if (!userMessage || userMessage === "") {
      setMissingMessage(true);
    }
    if (
      userName &&
      userName !== "" &&
      userEmail &&
      userEmail !== "" &&
      userMessage &&
      userMessage !== ""
    ) {
      setIsLoading(true);
      emailjs.sendForm("gmail", apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
      .then(
          (result) => {
            alert("메세지를 보냈습니다, 빠른 시간 안에 회신하겠습니다!");
            console.log(result.text)
          },
          (error) => {
            console.log(error.text);
            window.alert(
              "메시지를 보내는 중에 문제가 발생했습니다. 다시 시도하십시오!!"
            );
          }
        )
        .then(() => {
          setMessageSent(true);
          setIsLoading(false);
          setUserName("");
          setUserEmail("");
          setUserMessage("");
        });
    }
  };

  return (
    <div id="contactSection" className="section contactSection">
      <div className="title contact__title">
        {!messageSent ? (
          <Zoom>
            <h1>Let's talk!</h1>
          </Zoom>
        ) : (
          <h1>메세지가 성공적으로 전송되었습니다!!</h1>
        )}
        {!messageSent ? (
          <Zoom>
            <h3>
              아래 양식을 작성하거나 다음의 이메일로 연락바랍니다.{" "}
              <a href="canleez123@gmail.com">canleez123@gmail.com</a>{" "}
            </h3>
          </Zoom>
        ) : (
          <>
            <h3>감사합니다! 빠른 시간 안에 회신하겠습니다.!</h3>
            <p
              className="sendAnother__message"
              onClick={() => setMessageSent(false)}
            >
              다른 메세지를 보내시겠습니까?
            </p>
          </>
        )}
      </div>
      {!messageSent && (
        <div className="contactForm__container">
          <Zoom>
            <form className="contactForm" onSubmit={(e) => onSubmit(e)}>
              <div className="nameEmail__input__container">
                <div className="name__input__container">
                  <input
                    className={missingName && "missingInput"}
                    type="text"
                    placeholder="Your name"
                    name="from_name"
                    onChange={(e) => {
                      setUserName(e.target.value);
                      setMissingName(false);
                    }}
                  />
                  {missingName && (
                    <p className="required__input__message">
                      이름을 작성해주세요!
                    </p>
                  )}
                </div>
                <div className="email__input__container">
                  <input
                    className={missingEmail && "missing-input"}
                    type="email"
                    placeholder="Your@email.com"
                    name="email"
                    onChange={(e) => {
                      setUserEmail(e.target.value);
                      setMissingEmail(false);
                    }}
                  />
                  {missingEmail && (
                    <p className="required__input__message">
                      Email을 작성해주세요!!
                    </p>
                  )}
                </div>
              </div>
              <div className="message__input__container">
                <textarea
                  className={missingMessage && "missingTextarea"}
                  placeholder="Your message"
                  name="message"
                  onChange={(e) => {
                    setUserMessage(e.target.value);
                    setMissingMessage(false);
                  }}
                />
                {missingMessage && (
                  <p className="required__input__message">
                    메세지를 작성해주세요!!
                  </p>
                )}
              </div>
              <div className="sendBtn__container">
                {isLoading && (
                  <div className="loading__spinner__container">
                    <ReactLoading
                      type={"spin"}
                      color={"#fff"}
                      height={40}
                      width={40}
                    />
                  </div>
                )}
                {!isLoading && <button className="sendBtn">Send</button>}
              </div>
            </form>
          </Zoom>
        </div>
      )}
    </div>
  );
}

export default Contact;
