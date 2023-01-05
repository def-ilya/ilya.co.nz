import Image from "next/image";
import Input from "./Input";
import WindowButton from "./WindowButton";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ email: "", message: "" });
  return (
    <div className="h-screen min-w-screen flex justify-center items-center">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="mx-10 text-3xl md:text-4xl lg:text-6xl mb-6 font-bold">
          get in touch with me
        </h2>
        <div className="bg-black py-3 px-4 rounded-lg min-w-[50vw] max-w-2xl min-h-[384px] mx-3 lg:mx-auto font-mono">
          <div className="flex gap-2 mb-3">
            <WindowButton color="#EC6B5F" />
            <WindowButton color="#F4BF4F" />
            <WindowButton color="#61C554" />
          </div>
          <div>
            <div>
              <span className="flex">
                Shine-C9-Ilya:~ ilya$ curl -X POST /contact-form -d
              </span>
              <span className="flex flex-col">
                &apos;&#123;
                <div className="flex ml-6">
                  &quot;your_email&quot;:&quot;
                  <Input
                    setter={(val: string) =>
                      setFormData({ ...formData, email: val })
                    }
                    value={formData.email}
                    placeholder="example@email.com"
                  />
                  &quot;,
                </div>
                <div className="flex ml-6">
                  &quot;msg&quot;:&quot;
                  <Input
                    value={formData.message}
                    setter={(val: string) =>
                      setFormData({ ...formData, message: val })
                    }
                    placeholder="your_message"
                  />
                  &quot;
                </div>
                &#125;&apos;
              </span>
              {/* <span className="flex">
                <Input
                  value={formData.message}
                  setter={(val) => setFormData({ ...formData, message: val })}
                  placeholder="your_message"
                />
              </span>
              */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
