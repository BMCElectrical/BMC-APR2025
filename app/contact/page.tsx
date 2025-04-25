import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  const contactMethods = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "admin@bmcelectricalcontracting.com.au",
      href: "mailto:admin@bmcelectricalcontracting.com.au"
    },
    {
      icon: "fas fa-phone",
      title: "24/7 Emergency",
      value: "0432 974 722",
      href: "tel:0432 974 722"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      value: "Darley VIC",
      href: "https://maps.google.com"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-44 md:pt-52">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Electrical Services
              <span className="block text-green-700">Available 24/7</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Need an electrician? We&rsquo;re here to help with all your electrical needs, from emergency repairs to new installations.
            </p>
          </div>

          {/* Contact Form Section */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <ContactForm />
            </div>
          </div>
          
          {/* Contact Methods */}
          <div className="max-w-2xl mx-auto mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className="bg-white p-6 rounded-xl text-center hover:scale-105 transition-transform shadow-md"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <i className={`${method.icon} text-green-700 text-xl`}></i>
                  </div>
                  <h3 className="font-semibold mb-2">{method.title}</h3>
                  <p className="text-gray-600 break-words">{method.value}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}