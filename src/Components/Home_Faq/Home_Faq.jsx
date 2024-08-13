import React from 'react';
import Faq from "react-faq-component";

export const Home_Faq = () => {
    const data = {
        title: "FAQ (How it works)",
        rows: [
            // Existing FAQs
            {
                title: "What is TrueAdvice?",
                content: `TrueAdvice is a comprehensive financial service provider offering a range of services including insurance, mutual funds, loans, and tax-related services.`,
            },
            {
                title: "How do I get started with TrueAdvice?",
                content:
                    "You can get started by visiting our website, exploring our services, and contacting our team through our provided contact forms or phone numbers.",
            },
            {
                title: "What types of insurance does TrueAdvice offer?",
                content: `We offer health insurance, term life insurance, and guaranteed return plans, among other insurance products.`,
            },
            {
                title: "How do I choose the right insurance plan for me?",
                content: `Our expert advisors will assess your financial needs and guide you in choosing the best insurance plan suited to your requirements.`,
            },
            {
                title: "Can I switch my existing insurance to TrueAdvice?",
                content: `Yes, our team can help you transfer your existing insurance policies to TrueAdvice, ensuring a smooth transition.`,
            },
            {
                title: "What are mutual funds, and how do they work?",
                content: `Mutual funds are investment vehicles that pool money from various investors to invest in stocks, bonds, or other securities. TrueAdvice offers direct mutual fund investment services.`,
            },
            {
                title: "What is the minimum amount required to invest in mutual funds?",
                content: `The minimum investment amount varies depending on the mutual fund scheme. Our advisors can provide more details based on your investment goals.`,
            },
            {
                title: "Can I invest in mutual funds online through TrueAdvice?",
                content: `Yes, TrueAdvice offers a seamless online platform for investing in mutual funds.`,
            },
            {
                title: "What types of loans does TrueAdvice provide?",
                content: `We offer home loans, personal loans, business loans, loans against property, and more.`,
            },
            {
                title: "How do I apply for a loan through TrueAdvice?",
                content: `You can apply online or visit our office. Our loan advisors will assist you throughout the process.`,
            },
            {
                title: "Can I transfer my existing loan to TrueAdvice for better interest rates?",
                content: `Yes, TrueAdvice offers loan transfer services to help you get better interest rates and terms.`,
            },

            // New FAQs (GST and Tax Services)
            {
                title: "What GST services does TrueAdvice offer?",
                content: `We provide GST registration, GST return filing, and GST representation services.`,
            },
            {
                title: "How can TrueAdvice help with income tax returns?",
                content: `Our tax professionals can assist you in filing accurate and timely income tax returns, ensuring compliance with the latest regulations.`,
            },
            {
                title: "Do you offer accounting services for small businesses?",
                content: `Yes, TrueAdvice offers accounting services tailored to the needs of small and medium-sized businesses.`,
            },

            // Consulting and Advisory FAQs
            {
                title: "What consulting services does TrueAdvice provide?",
                content: `We offer consulting and advisory services in areas such as tax planning, financial planning, and business strategy.`,
            },
            {
                title: "How can I schedule a consultation with a TrueAdvice advisor?",
                content: `You can schedule a consultation by contacting us through our website or by calling our customer service.`,
            },

            // Support and Contact FAQs
            {
                title: "How can I contact TrueAdvice for support?",
                content: `You can reach us via email, phone, or through the contact form on our website.`,
            },
            {
                title: "What should I do if I have a complaint or issue?",
                content: `If you have any complaints or issues, you can contact our customer support team, and we will address your concerns promptly.`,
            },
        ],
    };

    const styles = {
        titleTextColor: "blue",
        rowTitleColor: "blue",
    };

    const config = {
        // animate: true,
        // arrowIcon: "V",
        // tabFocus: true
    };

    return (
        <div className='py-[50px]'>
            <div className='lg:max-w-[1440px] m-auto px-[20px]'>
                <div>
                    <Faq
                        data={data}
                        styles={styles}
                        config={config}
                    />
                </div>
            </div>
        </div>
    );
}
