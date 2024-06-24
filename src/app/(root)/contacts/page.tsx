import ContactsForm from "@/containers/contacts-page/ContactsForm";
import HeaderSection from "@/containers/contacts-page/HeaderSection";
import LocationSection from "@/containers/contacts-page/LocationSection";

const ContactsPage = () => {
    return (
        <>
            <HeaderSection />
            <ContactsForm />
            <LocationSection />
        </>
    );
};

export default ContactsPage;
