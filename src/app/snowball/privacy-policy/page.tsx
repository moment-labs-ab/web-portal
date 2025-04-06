import Hero from "@/components/Hero";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import { Suspense } from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className="flex justify-center min-h-screen items-start pt-10 mt-20">
      <div className="p-6 font-sans w-full max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-10">Privacy Policy</h1>
        <p className="text-sm font-semibold">Last updated: March 23, 2025</p>
        <p className="text-base">This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
        <p className="text-base">We use Your Personal Data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>
        
        <h2 className="text-xl font-semibold mt-4">Interpretation and Definitions</h2>
        <h3 className="text-lg font-medium mt-2">Interpretation</h3>
        <p className="text-base">The words of which the initial letter is capitalized have meanings defined under the following conditions.</p>
        
        <h3 className="text-lg font-medium mt-2">Definitions</h3>
        <p className="text-base">For the purposes of this Privacy Policy:</p>
        <ul className="list-disc pl-6">
          <li><strong>Account</strong> means a unique account created for You to access our Service.</li>
          <li><strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party.</li>
          <li><strong>Application</strong> refers to <strong>Snowball</strong>, the software provided by the Company.</li>
          <li><strong>Company</strong> ("We", "Us", "Our") refers to Moment Labs LLC, 433 S 7th St, Minneapolis, MN 55415.</li>
          <li><strong>Country</strong> refers to: Minnesota, United States.</li>
          <li><strong>Device</strong> means any device that can access the Service.</li>
          <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
          <li><strong>Service</strong> refers to the Application.</li>
          <li><strong>Service Provider</strong> means any natural or legal person who processes data on behalf of the Company.</li>
          <li><strong>Usage Data</strong> refers to data collected automatically from the Service.</li>
          <li><strong>You</strong> means the individual or entity using the Service.</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-4">Collecting and Using Your Personal Data</h2>
        <h3 className="text-lg font-medium mt-2">Types of Data Collected</h3>
        <h3 className="text-lg font-medium mt-2">Personal Data</h3>
        <p className="text-base">While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
        <ul className="list-disc pl-6">
          <li>Email address</li>
          <li>Usage Data</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-2">Usage Data</h3>
        <p className="text-base">Usage Data is collected automatically and may include:</p>
        <ul className="list-disc pl-6">
          <li>Your Device's Internet Protocol address (IP address).</li>
          <li>Operating system and version.</li>
          <li>Unique device identifiers and other diagnostic data.</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-4">Use of Your Personal Data</h2>
        <p className="text-base">We may use Personal Data for the following purposes:</p>
        <ul className="list-disc pl-6">
          <li>To provide and maintain our Service.</li>
          <li>To manage Your Account.</li>
          <li>For the performance of a contract.</li>
          <li>To contact You via email, calls, SMS, or push notifications.</li>
          <li>To provide You with news, special offers, and updates.</li>
          <li>To manage Your requests.</li>
          <li>For business transfers and analytics.</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-4">Retention of Your Personal Data</h2>
        <p className="text-base">We retain Your Personal Data as necessary to fulfill the purposes outlined in this Privacy Policy.</p>
        
        <h2 className="text-xl font-semibold mt-4">Transfer of Your Personal Data</h2>
        <p className="text-base">Your information may be transferred and maintained outside Your jurisdiction. We take reasonable steps to protect it.</p>
        
        <h2 className="text-xl font-semibold mt-4">Delete Your Personal Data</h2>
        <p className="text-base">You have the right to delete or request deletion of Your Personal Data.</p>
        
        <h2 className="text-xl font-semibold mt-4">Security of Your Personal Data</h2>
        <p className="text-base">While We strive to use commercially acceptable means to protect Your Personal Data, no method is 100% secure.</p>
        
        <h2 className="text-xl font-semibold mt-4">Children's Privacy</h2>
        <p className="text-base">We do not knowingly collect Personal Data from anyone under the age of 13.</p>
        
        <h2 className="text-xl font-semibold mt-4">Links to Other Websites</h2>
        <p className="text-base">We are not responsible for the privacy practices of third-party websites.</p>
        
        <h2 className="text-xl font-semibold mt-4">Changes to this Privacy Policy</h2>
        <p className="text-base">We may update Our Privacy Policy. Changes will be posted on this page.</p>
        
        <h2 className="text-xl font-semibold mt-4">Contact Us</h2>
        <p className="text-base">If you have any questions, contact us:</p>
        <ul className="list-disc pl-6">
          <li><strong>By email:</strong> <a href="mailto:snowball@momentlabs.com" className="text-blue-500 underline">snowball@momentlabs.com</a></li>
          <li><strong>By visiting:</strong> <a href="https://moment-labs.com/snowball" className="text-blue-500 underline">moment-labs.com/snowball</a></li>
        </ul>
      </div>
    </div>
    </Suspense>
  );
};

export default PrivacyPolicy;