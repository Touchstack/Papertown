import GeneralNav from "../../Navbar/GeneralNav";
import Footer from "../../pages/FooterPage/Footer";
import BgImage from "../../assets/Images/detaImage.png"
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion.jsx";

import { accordianData } from "../../../ConstantData";

const FactsAndQuestions = () => {
  return (
    <div>
      <GeneralNav color="black" btnColor="black" bgShadow="shadow" />
      <div className="bg-[#FFF] flex flex-col mx-auto p-4 md:p-16 lg:text-xl md:text-xl sm:text-lg mt-12">
         <h1 className="text-6xl font-Bold mb-6">FAQs</h1> 
         <img src={BgImage} alt="" />
      </div>
 
       <div className="md:p-20 p-10 space-y-6">
          <Accordion type="single" collapsible className={"flex flex-col gap-8"}>
           <AccordionItem
             value="item-1"
             className={"rounded-[20px] border-[2px] py-6 px-4"}
           >
             <AccordionTrigger className={"hover:no-underline py-4"}>
              <div className="flex flex-col items-start">
                 <h1 className="text-[20px] font-Bold">What is Papertown Imaginarium?</h1>
              </div>
             </AccordionTrigger>
             <AccordionContent>
               <div>
                 <p className="text-[16px]  leading-[26px] text-[#808080]">
                  Papertown Imaginarium is a not-for-profit organisation that works with young people who love to
                  write, and with schools to get pupils and students engaged with fun and insightful writing
                  activities.
                 </p>
               </div>
             </AccordionContent>
             </AccordionItem>
          </Accordion>


          <Accordion type="single" collapsible className={"flex flex-col gap-8"}>
           <AccordionItem
             value="item-1"
             className={"rounded-[20px] border-[2px] py-6 px-4"}
           >
             <AccordionTrigger className={"hover:no-underline py-4"}>
              <div className="flex flex-col items-start">
                 <h1 className="text-[20px] font-Bold">How does Papertown Imaginarium work with young people who love to write?</h1>
              </div>
             </AccordionTrigger>
             <AccordionContent>
               <div className="p-2 space-y-3">
                 <li className="text-[16px] text-[#808080]">
                  We receive, read, review and share feedback on writing done by registered members.
                 </li>
                 <li className="text-[16px] text-[#808080]">
                  We share tips, notes and lessons that help writers know more about the things that go into writing good stories, poems, and essays. With these tips, notes and lessons, writers can learn to improve their writing.
                 </li>
                 <li className="text-[16px] text-[#808080]">
                  We share writing prompts (writing exercises) for writers to explore through stories, poems, and essays. These prompts are designed to get and keep writers writing.
                 </li>
                 <li className="text-[16px] text-[#808080]">
                   From time to time we organise writing competitions and projects for young writers to participate in. Details of these competitions and projects are announced <a href="/news" className="hover:underline hover:cursor-pointer text-[#00F]">here</a> when they come up.
                 </li>
                 <li className="text-[16px] text-[#808080] text-left">
                   We share information about writing competitions, projects and opportunities from other sources, and may be able to offer general support and guidance, (that do not contravene the rules of those opportunities), to our members who are interested in taking advantage of them.
                 </li>
                 <li className="text-[16px] text-[#808080]">
                   For young writers who want to explore and pursue commercial publishing, we publish books written by such writers through the publishing service offered by our commercial publishing  business, Papertown Press.
                 </li>
                 <li className="text-[16px] text-[#808080]">
                   We publish stories, poems, and essays written by young writers on our website.
                 </li>
               </div>
             </AccordionContent>
             </AccordionItem>
          </Accordion>


          <Accordion type="single" collapsible className={"flex flex-col gap-8"}>
           <AccordionItem
             value="item-1"
             className={"rounded-[20px] border-[2px] py-6 px-4"}
           >
             <AccordionTrigger className={"hover:no-underline py-4"}>
              <div className="flex flex-col items-start">
                 <h1 className="text-[20px] font-Bold">How does Papertown Imaginarium work with schools to support writing education?</h1>
              </div>
             </AccordionTrigger>
             <AccordionContent>
               <div className="p-2 space-y-3">
                 <li className="text-[16px] text-[#808080]">
                  We work with writing instructors in schools to create fun, engaging and creative ways of teaching pupils and students how to write.
                 </li>
                 <li className="text-[16px] text-[#808080]">
                   We work with school coordinators to set up and run <a href="/pressclub" className="hover:underline hover:cursor-pointer text-[#0000FF]">School Press Clubs</a>.
                 </li>
                 <li className="text-[16px] text-[#808080]">
                   We work with schools to plan and coordinate Literacy Week Projects. These are school-wide creative writing exercises that gets pupils/students to explore selected themes through their own original stories, poems, articles and comics/drawings. At the end of the writing period, the pupils/students work are published in book collections.
                 </li>
               </div>
             </AccordionContent>
             </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className={"flex flex-col gap-8"}>
           <AccordionItem
             value="item-1"
             className={"rounded-[20px] border-[2px] py-6 px-4"}
           >
             <AccordionTrigger className={"hover:no-underline py-4"}>
              <div className="flex flex-col items-start">
                 <h1 className="text-[20px] font-Bold">Who is Papertown Imaginarium for?</h1>
              </div>
             </AccordionTrigger>
             <AccordionContent>
               <div>
                 <p className="text-[16px]  leading-[26px] text-[#808080]">
                   Papertown Imaginarium is for anyone between 10 and 19 years who loves to write. Whether you dream of becoming a professional, published writer, would like a writing-related career, or simply love to write (and want to keep writing) as a favourite pastime, Papertown Imaginarium is here to help you accomplish what you want with your writing.
                 </p>
               </div>
             </AccordionContent>
             </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className={"flex flex-col gap-8"}>
           <AccordionItem
             value="item-1"
             className={"rounded-[20px] border-[2px] py-6 px-4"}
           >
             <AccordionTrigger className={"hover:no-underline py-4"}>
              <div className="flex flex-col items-start">
                 <h1 className="text-[20px] font-Bold">What do I need to do to enjoy all that Papertown Imaginarium offers?</h1>
              </div>
             </AccordionTrigger>
             <AccordionContent>
               <div>
                 <p className="text-[16px]  leading-[26px] text-[#808080]">
                 If you’re interested in taking full advantage of all the services we offer, you have to become a registered member of Papertown Imaginarium.
                 </p>
               </div>
             </AccordionContent>
             </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className={"flex flex-col gap-8"}>
           <AccordionItem
             value="item-1"
             className={"rounded-[20px] border-[2px] py-6 px-4"}
           >
             <AccordionTrigger className={"hover:no-underline py-4"}>
              <div className="flex flex-col items-start">
                 <h1 className="text-[20px] font-Bold">How do I become a member of Papertown Imaginarium?</h1>
              </div>
             </AccordionTrigger>
             <AccordionContent>
               <div>
                 <p className="text-[16px] leading-[26px] text-[#808080]">
                    To become a member of Papertown Imaginarium you have to create an account on our website. If you are less than 18 years we require that an account be created for you by an adult (i.e. your father or mother). This is because you are a minor and your parents are legally responsible for you. There are also terns which govern the use of our website and only adults can read,
                    understand and accept these terms on behalf of their minor children/wards.
                 </p>
               </div>
             </AccordionContent>
             </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className={"flex flex-col gap-8"}>
           <AccordionItem
             value="item-1"
             className={"rounded-[20px] border-[2px] py-6 px-4"}
           >
             <AccordionTrigger className={"hover:no-underline py-4"}>
              <div className="flex flex-col items-start">
                 <h1 className="text-[20px] font-Bold">Do I have to pay to become a member of Papertown Imaginarium?</h1>
              </div>
             </AccordionTrigger>
             <AccordionContent>
               <div>
                 <p className="text-[16px]  leading-[26px] text-[#808080]">
                  No. You do not have to pay anything to become a member of Papertown Imaginarium. We are a not-for-profit organisation; this means that we offer our services for free.
                 </p>
               </div>
             </AccordionContent>
             </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className={"flex flex-col gap-8"}>
           <AccordionItem
             value="item-1"
             className={"rounded-[20px] border-[2px] py-6 px-4"}
           >
             <AccordionTrigger className={"hover:no-underline py-4"}>
              <div className="flex flex-col items-start">
                 <h1 className="text-[20px] font-Bold">What if I do not want to become a member of Papertown Imaginarium.</h1>
              </div>
             </AccordionTrigger>
             <AccordionContent>
               <div>
                 <p className="text-[16px]  leading-[26px] text-[#808080]">
                  It is completely fine if you do not want to become a member of Papertown Imaginarium. You can browse through our website, read updates about writing opportunities and read writing published on the website without being a member. You would however not be able to send us your writing for review, view and/or download our writing resources, have your story published on our website, or take part in writing competitions and projects organised for members.
                 </p>
               </div>
             </AccordionContent>
             </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className={"flex flex-col gap-8"}>
           <AccordionItem
             value="item-1"
             className={"rounded-[20px] border-[2px] py-6 px-4"}
           >
             <AccordionTrigger className={"hover:no-underline py-4"}>
              <div className="flex flex-col items-start">
                 <h1 className="text-[20px] font-Bold">Can I get published through Papertown Imaginarium?</h1>
              </div>
             </AccordionTrigger>
             <AccordionContent>
               <div>
                 <p className="text-[16px]  leading-[26px] text-[#808080]">
                  When you submit your writing to us for review, or explore any of our prompts on the website, and complete the revision process to make your work ready for the public, we publish it on our website for others to read.
                  You can also take your writing further and become commercially published by having it published for sale and distribution through our publishing business, Papertown Press.
                 <br/> Additionally, you can get published beyond the website if you participate in any of our writing projects, and your writing is selected as one of the entries to be published in a book collection.
                 </p>
               </div>
             </AccordionContent>
             </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className={"flex flex-col gap-8"}>
           <AccordionItem
             value="item-1"
             className={"rounded-[20px] border-[2px] py-6 px-4"}
           >
             <AccordionTrigger className={"hover:no-underline py-4"}>
              <div className="flex flex-col items-start">
                 <h1 className="text-[20px] font-Bold">Do I get paid for my writing published on the Papertown Imaginarium website?</h1>
              </div>
             </AccordionTrigger>
             <AccordionContent>
               <div>
                 <p className="text-[16px] leading-[26px] text-[#808080]">
                  No. The Papertown Imaginarium website is a free, public platform and we do not charge people for reading the content published on our website, and so we are not able to pay writers whose
                  writing are published on our website. We publish your writing on our website as a way to encourage you to keep writing - we believe that having others read and enjoy what you’ve written
                  can be a great fuel for your writing. We also use it to encourage others like you to write and share their writing with a broad audience.
                  There are several ways for you to make money from your writing - including exploring commercial publishing through Papertown Press, and taking advantage of writing opportunities that offer payment, compensation or prizes. We share information about such opportunities <a href="/news" className="text-[#00F] hover:underline hover:cursor-pointer">here</a> when we have them or come across them from other sources.
                 </p>
               </div>
             </AccordionContent>
             </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className={"flex flex-col gap-8"}>
           <AccordionItem
             value="item-1"
             className={"rounded-[20px] border-[2px] py-6 px-4"}
           >
             <AccordionTrigger className={"hover:no-underline py-4"}>
              <div className="flex flex-col items-start">
                 <h1 className="text-[20px] font-Bold">I want to take my writing seriously and become published beyond the content
                 shared on the website. Can Papertown Imaginarium help me?</h1>
              </div>
             </AccordionTrigger>
             <AccordionContent>
               <div>
                 <p className="text-[16px] leading-[26px] text-[#808080]">
                   Yes. We have a commercial publishing business that publishes, sells and distributes books written by young writers. If you have written something, you can share your manuscript with us and we would take a look and see if, and how, we can get it published for you.
                 </p>
               </div>
             </AccordionContent>
             </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className={"flex flex-col gap-8"}>
           <AccordionItem
             value="item-1"
             className={"rounded-[20px] border-[2px] py-6 px-4"}
           >
             <AccordionTrigger className={"hover:no-underline py-4"}>
              <div className="flex flex-col items-start">
                 <h1 className="text-[20px] font-Bold">I would like to become a commercially published writer but I have not written a
                 book yet. Can Papertown Imaginarium help me?</h1>
              </div>
             </AccordionTrigger>
             <AccordionContent>
               <div>
                 <p className="text-[16px] leading-[26px] text-[#808080]">
                  Yes. We have a professional creative writing program designed specifically for aspiring young authors outside of what we offer through our website. We would take you through one-on-one
                  writing lessons, guide you through coming up with your own original idea, working on your manuscript, editing your work, getting it published into a book, and selling and distributing it for
                  you. This is a more comprehensive writing and publishing service provided by our commercial publishing business, Papertown Press. It is not covered by the free services offered by
                  Papertown Imaginarium.
                 </p>
               </div>
             </AccordionContent>
             </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className={"flex flex-col gap-8"}>
           <AccordionItem
             value="item-1"
             className={"rounded-[20px] border-[2px] py-6 px-4"}
           >
             <AccordionTrigger className={"hover:no-underline py-4"}>
              <div className="flex flex-col items-start">
                 <h1 className="text-[20px] font-Bold">Is Papertown Imaginarium only for people who want to become professional
                 writers?</h1>
              </div>
             </AccordionTrigger>
             <AccordionContent>
               <div>
                 <p className="text-[16px] leading-[26px] text-[#808080]">
                   Absolutely not! Papertown Imaginarium is for everyone who loves to write. Writing is not just about creating written content for public consumption. It can (and should) be used for personal expression and reflection, to connect with people we want to on a personal level, to explore issues for our own personal understanding, and even just as a silly, favourite pastime. We do not put pressure on anyone to write anything in particular, to write in any particular style, or on any  particular level. We’re simply here to create a space for you to engage with writing in the way that feels natural and fun for you.
                 </p>
               </div>
             </AccordionContent>
             </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className={"flex flex-col gap-8"}>
           <AccordionItem
             value="item-1"
             className={"rounded-[20px] border-[2px] py-6 px-4"}
           >
             <AccordionTrigger className={"hover:no-underline py-4"}>
              <div className="flex flex-col items-start">
                 <h1 className="text-[20px] font-Bold">What is the difference between Papertown Imaginarium and Papertown Press</h1>
              </div>
             </AccordionTrigger>
             <AccordionContent>
               <div>
                 <p className="text-[16px] leading-[26px] text-[#808080]">
                  Papertown Imaginarium and Papertown Press are two separate entities. Papertown Imaginarium offers writing services to young writers and works with schools to deliver writing services to
                  pupils/students for free. Papertown Press on the other hand is a for-profit publishing business primarily focused on publishing, selling and distributing books for children and young adults.
                  The two entities work together to promote writing for and by children and young people.
                 </p>
               </div>
             </AccordionContent>
             </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className={"flex flex-col gap-8"}>
           <AccordionItem
             value="item-1"
             className={"rounded-[20px] border-[2px] py-6 px-4"}
           >
             <AccordionTrigger className={"hover:no-underline py-4"}>
              <div className="flex flex-col items-start">
                 <h1 className="text-[20px] font-Bold">Can Papertown Imaginarium help me write or review a writing assignment for
                 school?</h1>
              </div>
             </AccordionTrigger>
             <AccordionContent>
               <div>
                 <p className="text-[16px] leading-[26px] text-[#808080]">
                   No. We do not write or review writing assignments for school.
                 </p>
               </div>
             </AccordionContent>
             </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className={"flex flex-col gap-8"}>
           <AccordionItem
             value="item-1"
             className={"rounded-[20px] border-[2px] py-6 px-4"}
           >
             <AccordionTrigger className={"hover:no-underline py-4"}>
              <div className="flex flex-col items-start">
                 <h1 className="text-[20px] font-Bold">Can Papertown Imaginarium help me write or review my submission for a writing
                 competition?</h1>
              </div>
             </AccordionTrigger>
             <AccordionContent>
               <div>
                 <p className="text-[16px] leading-[26px] text-[#808080]">
                   No. We cannot help you write a submission for a writing competition - whether by Papertown or another entity. We may be able to offer general guidance that may help you participate in writing competitions and projects organised by other sources/entities, but we would only do so in a way that does not contravene the rules of such competition or project.
                 </p>
               </div>
             </AccordionContent>
             </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className={"flex flex-col gap-8"}>
           <AccordionItem
             value="item-1"
             className={"rounded-[20px] border-[2px] py-6 px-4"}
           >
             <AccordionTrigger className={"hover:no-underline py-4"}>
              <div className="flex flex-col items-start">
                 <h1 className="text-[20px] font-Bold">Can I submit a writing completed through Papertown Imaginarium to a writing
                 competition or project?</h1>
              </div>
             </AccordionTrigger>
             <AccordionContent>
               <div>
                 <p className="text-[16px] leading-[26px] text-[#808080]">
                     You may be able to submit a writing done through our platform to a writing competition or project, if it does not contravene the rules of such competition or project. For example, writing
                    competitions and projects usually require that entries for the competition or projects should not  be work that has been previously published; and so writing that has been published on the
                    Papertown Imaginarium website or any other platform or form would not be eligible for such competitions or  projects. In any case, we see writing competitions and projects as opportunities for you to practice your writing, and we encourage you to create new work for competitions and projects.
                 </p>
               </div>
             </AccordionContent>
             </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className={"flex flex-col gap-8"}>
           <AccordionItem
             value="item-1"
             className={"rounded-[20px] border-[2px] py-6 px-4"}
           >
             <AccordionTrigger className={"hover:no-underline py-4"}>
              <div className="flex flex-col items-start">
                 <h1 className="text-[20px] font-Bold">Can I share my writing done through the Papertown Imaginarium platform with
                 others outside of the Papertown Imaginarium website?</h1>
              </div>
             </AccordionTrigger>
             <AccordionContent>
               <div>
                 <p className="text-[16px] leading-[26px] text-[#808080]">
                   Yes! Every writing you do with/through the Papertown Imaginarium platform belongs to you and you can do whatever you want with it. We encourage you to share your work with as many people  as possible. You can also invite your family and friends to read your writings, and those of other young writers, on the website.
                 </p>
               </div>
             </AccordionContent>
             </AccordionItem>
          </Accordion>
       </div>

      <div className="bg-[#B44DB8]">
        <Footer />
      </div>
    </div>
  )
}

export default FactsAndQuestions