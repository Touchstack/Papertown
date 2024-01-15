import GeneralNav from "../../Navbar/GeneralNav";
import Footer from "../FooterPage/Footer";

const TermsOfUse = () => {
  return (
    <div className="">
      <GeneralNav color="black" btnColor="black" bgShadow="shadow" />
      <div className="text-center lg:p-24 md:p-18 sm:p-8 p-8">
        <h3 className="font-Bold text-center lg:text-5xl md:text-5xl sm:text-4xl text-4xl mb-12 text-[#000]">
          Paper Town Terms Of Use
        </h3>
      </div>
      <div className="container mx-auto px-8">
        <p className="font-SemiBold pb-6 lg:text-2xl md:text-xl sm:text-xl text-xl text-gray-500 py-2">
          Background:
        </p>
        <p className="font-Medium pb-6">
          While this website and its content have been designed for and to be
          use by minors (persons below 18 years), the terms “user” and “users”
          as used in these Terms of Use mean adult users (users 18 years and
          above) and parents/guardians who create accounts for their minor
          children/wards on this website and are responsible for monitoring and
          controlling their use of this website. Parents/guardians of minor
          users are vicariously liable for the acts of their children/wards.{" "}
        </p>
        <p className="font-Medium pb-6">
          These Terms of Use describe the terms on which users may access and
          use this website, owned and operated by Papertown Imaginarium.{" "}
        </p>
        <p className="font-Medium pb-6">
          By using this website, users signify that they have read, understand
          and agree to be bound by these Terms of Use.{" "}
        </p>
        <p className="font-Medium pb-6">
          Your continued use of the website following the posting of any changes
          to the Terms of Use constitutes an acceptance of those changes.
        </p>
        <div className="max-w-4xl mx-auto p-4 font-Medium ">
          <h2 className="mb-4">
            <span className="font-Bold">1. </span>
            Proprietary Rights in Content on the Website:
          </h2>

          <p className="mb-4 m-8">
            <span className="font-Bold">a. </span>
            All content on the website including, but not limited to, designs,
            texts, graphics, documents and other files, is the proprietary
            property of Papertown Imaginarium.
          </p>

          <p className="mb-4 m-8">
            <span className="font-Bold">b. </span>
            No content may be modified, copied, distributed, framed, reproduced,
            republished, downloaded, displayed, posted, transmitted, shared or
            sold in any form or by any means, in whole or in part, without the
            prior written consent of Papertown Imaginarium.
          </p>

          <p className="mb-4 m-8">
            <span className="font-Bold">c. </span>
            Registered users with accounts may download or print a copy of any
            portion of the content solely for their personal, non-commercial
            use, provided they keep all copyright or other proprietary notices
            intact.
          </p>
        </div>
        <div className="max-w-4xl mx-auto p-4 font-Medium ">
          <h2 className="mb-4">
            <span className="font-Bold">2. </span>
            Links to Other Websites:
          </h2>

          <p className="mb-4 m-8">
            <span className="font-Bold">a. </span>
            This website may contain links to other websites. Papertown
            Imaginarium is not responsible for the content, accuracy or opinions
            expressed in such websites, and those websites are not investigated,
            monitored or checked for accuracy or completeness by us.
          </p>

          <p className="mb-4 m-8">
            <span className="font-Bold">b. </span>
            Inclusion of any linked website on or through this website does not
            imply approval or endorsement of the linked website by us.
          </p>
        </div>
        <div className="max-w-4xl mx-auto p-4 font-Medium ">
          <h2 className="mb-4">
            <span className="font-Bold">3. </span>
            Jurisdiction:
          </h2>

          <p className="mb-4 m-8">
            <span className="font-Bold">a. </span>
            This website is controlled and operated by Papertown Imaginarium
            from its principal office in Accra, Ghana. We make no representation
            that materials on our website are appropriate for use in other
            jurisdictions.
          </p>

          <p className="mb-4 m-8">
            <span className="font-Bold">b. </span>
            Recognising the global nature of the internet, you agree to comply
            with all applicable local rules.
          </p>
          <p className="mb-4 m-8">
            <span className="font-Bold">c. </span>
            This website is not intended to subject Papertown Imaginarium to the
            laws or jurisdiction of any country or territory other than the
            Republic of Ghana.
          </p>
        </div>
        <div className="max-w-4xl mx-auto p-4 font-Medium ">
          <h2 className="mb-4">
            <span className="font-Bold">4. </span>
            Governing Law:
          </h2>

          <p className="mb-4 m-8">
            <span className="font-Bold">a. </span>
            This agreement between the user and Papertown Imaginarium regarding
            the Papertown Imaginarium website will be goverened and construed in
            accordance with the laws of the Republic of Ghana without regard to
            conflict of laws principles. 5. Notices:
          </p>
        </div>

        <div className="max-w-4xl mx-auto p-4 font-Medium py-6">
          <h2 className="mb-4">
            <span className="font-Bold">5. </span>
            Notices:
          </h2>

          <p className="mb-4 m-8">
            <span className="font-Bold">a. </span>
            Papertown Imaginarium may deliver a notice to a user/users under
            these Terms of Use by means of email or a general notice posted on
            this website.
          </p>
          <p className="mb-4 m-8">
            <span className="font-Bold">b. </span>
            You may give notice to, or submit comments or questions to,
            Papertown Imaginarium at any time via email to
            <span className="m-1">
              <a href="#" className="text-blue-500 hover:underline">
                hello@papertownimaginarium.org
              </a>
              <span className="m-1"> //hello@papertown.africa</span>
            </span>
          </p>
        </div>
      </div>
      <div className="bg-[#B44DB8]">
        <Footer />
      </div>
    </div>
  );
};

export default TermsOfUse;
