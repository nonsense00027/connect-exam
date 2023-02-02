import React from "react";

import PrimaryButton from "~/components/PrimaryButton";

function Contact() {
  return (
    <div className="container mx-auto">
      <h2 className="section-title text-center mb-8">Contact</h2>

      <form className="px-32">
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="姓" className="form-label">
              姓
            </label>
            <input
              type="text"
              name="姓"
              placeholder="例）太郎"
              className="form-input"
            />
          </div>
          <div className="form-col">
            <label htmlFor="姓" className="form-label">
              姓
            </label>
            <input
              type="text"
              name="姓"
              placeholder="例）太郎"
              className="form-input"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-col">
            <label htmlFor="メールアドレス" className="form-label">
              メールアドレス
            </label>
            <input
              type="text"
              name="メールアドレス"
              placeholder="例）yamada@email.com"
              className="form-input"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-col">
            <label htmlFor="お問合せ内容" className="form-label">
              お問合せ内容
            </label>
            <textarea
              name="お問合せ内容"
              id=""
              className="form-input"
              cols={30}
              rows={10}
            ></textarea>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div className="w-[160px]">
            <PrimaryButton title="送信する" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
