export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-100 text-center">
      <h3 className="text-3xl font-semibold mb-4">Visit Us</h3>
        <p className="mb-8">123 Main St, Chatham, MA 02633</p>
      <div className="flex flex-col items-center">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5959.349438862607!2d-69.96667492440636!3d41.68436797752233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89fb14a2f269a661%3A0xdcedf563c6880168!2sChatham%20Liquor%20Store!5e0!3m2!1sen!2sus!4v1747854637591!5m2!1sen!2sus" 
            width="75%" 
            height="350" 
            style={ {border:0}}{...{justifycontent:"center"}} {...{position:"relative"}}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        </div>
    </section>
  )
}
