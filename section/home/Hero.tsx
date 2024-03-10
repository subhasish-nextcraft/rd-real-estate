import Section from 'ui/Section';
// import ContactModalButton from './ContactModalButton';

function SideComp() {
  return (
    <>
      <h1 className="title mb-6">Lift your business online with Dailyrush</h1>
      <p>
        We use Next.js and React to create high-performing websites with a focus
        on client satisfaction and user-friendly experiences.
      </p>
      <div className="mt-8">
        {/* <ContactModalButton /> */}
      </div>
    </>
  );
}

export default function Hero() {
  return (
    <Section
      hero
      SideComp={SideComp}
      imgSrc="/home/hero.jpg"
      imgAlt="Happy client"
    />
  );
}
