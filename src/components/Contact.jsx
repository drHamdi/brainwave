import React , { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Contact = ({ styles }) => {
    const form = useRef(null);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_vammkbg', 'template_azizform', form.current, {
          publicKey: 'VLNxNyierq9xaEsFI',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setShowSuccessModal(true);
            setFormSubmitted(true);
            deleteFormData(); // Supprimer les données du formulaire après soumission
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    };
  
    const deleteFormData = () => {
      form.current.reset(); // Réinitialiser les valeurs des champs d'entrée
    };
  
  return (
    <div id='clients' className="dark:bg-gray-900">
    {!formSubmitted ? (
      <form ref={form} onSubmit={sendEmail} className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-white dark:text-gray-400 sm:text-xl">
          Vous avez un problème technique ? Vous souhaitez envoyer des commentaires sur une fonctionnalité bêta ?
          Besoin de détails sur notre plan Business ? Faites le nous savoir.
        </p>
        <div>
          <label htmlFor="user_name" className="block mb-2 text-sm font-medium text-white">Nom</label>
          <input type="text" name="user_name" className="modern-input pilote shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div>
          <label htmlFor="user_email" className="block mb-2 text-sm font-medium text-white">Email</label>
          <input type="email" name="user_email" className="modern-input pilote shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-white dark:text-gray-400">Message</label>
          <textarea name="message" className="modern-textarea pilote shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"></textarea>
        </div>
        <div>
          <input type="submit" value="Envoyer" className="py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none cursor-pointer" />
        </div>
      </form>
    ) : null}
    {showSuccessModal && (
      <div className="success-modal mt-6 text-center">
        <FontAwesomeIcon icon={faCheckCircle} size="5x" className="text-green-500 mb-3" />
        <p className="text-lg text-white">Votre message a été envoyé avec succès!</p>
      </div>
    )}
  </div>
  )
}

export default Contact