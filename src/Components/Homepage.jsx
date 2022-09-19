import intore from "../images/intore.jpeg"
import flag from "../images/flag.png"
import 'antd/dist/antd.css';
import { Modal, Form, Input} from 'antd';
import { useState } from "react";

function HomePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const { visible, onCancel, onCreate, form } = props;
    const { getFieldDecorator } = form;
    const FormItem = Form.Item;
    return (
      <div className="flex">
        <div className="w-full md:w-4/6 lg:w-3/6 xl:w-4/6  min-h-screen flex flex-col justify-center">
            <div className="pl-32">
                <div>
            
                </div>
            <div className="flex">
                <h1 className="font-mono text-6xl text-black-400">Welcome</h1>
            <img className="h-[30px]" 
                src={flag} 
                alt=""
            
            />
            </div>
              <p className="font-serif font-bold text-sky-200">to Culture Learning Digital System</p>
            <div>
              <p className="pt-8 font-italic text-black-800">The best place to learn all things Rwandan Culture
              a single distinct meaningful element of speech or writing <br/>, used with others (or sometimes alone) to form a sentence and typically shown with a space on either <br />
              side when written or printed.
              </p>
            </div>
            <div>
                <button className="mt-4 font-mono text-lg bg-transparent hover:bg-black-500 hover:text-white text-black-700 font-semibold hover:text-white py-2 px-12 border-2 border-black hover:border-transparent rounded"
                    onClick={showModal}
                >
                
                    Login
                </button>
                <Modal title="Login" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                   hello
                   <FormItem label="Title">
                        {getFieldDecorator('title', {
                        rules: [{ required: true, message: 'Please input the title of collection!' }],
                        })(
                        <Input />
                        )}
                    </FormItem>
                    <FormItem label="Description">
                        {getFieldDecorator('description')(<Input type="textarea" />)}
                    </FormItem>
                </Modal>
            </div> 
            </div>
             
        </div>
        <div className="flex-1 max-h-screen hidden md:block">
             <img className="object-cover h-[100%] flex-shrink-0"
                src={intore} 
                alt="intore" />
          
        </div>
      </div>
    );
  }
  
  export default HomePage;