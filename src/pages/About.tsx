
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const About = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-3xl animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">Om Mig</h1>
        
        <div className="mb-10 rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
            alt="Profilbillede" 
            className="w-full h-auto object-cover"
          />
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p>Hej og velkommen til min blog! Jeg er glad for, at du har fundet vej hertil.</p>
          
          <p>Jeg er en passioneret [din beskrivelse her, f.eks. fotograf, skribent, programmør] med en kærlighed til [dine interesser]. Denne blog er mit kreative fristed, hvor jeg deler mine tanker, oplevelser og projekter.</p>
          
          <h2>Min Baggrund</h2>
          <p>Jeg har en baggrund inden for [din uddannelse/professionelle baggrund], og har arbejdet med [relevante erfaringer]. Min rejse har lært mig meget om [relevante emner], og det er præcis disse indsigter, jeg håber at dele her på bloggen.</p>
          
          <h2>Hvad Kan Du Forvente?</h2>
          <p>På denne blog vil du finde indlæg om:</p>
          <ul>
            <li>Mine nyeste projekter</li>
            <li>Interessante oplevelser fra min hverdag</li>
            <li>Guides og tutorials om [relevante emner]</li>
            <li>Refleksioner over [relevante emner]</li>
          </ul>
          
          <h2>Lad Os Holde Kontakten</h2>
          <p>Jeg elsker at høre fra mine læsere! Du er altid velkommen til at kommentere på mine indlæg eller kontakte mig direkte. Lad os skabe en dialog og lære af hinanden.</p>
          
          <p>Tak fordi du læste med, og jeg håber, du vil nyde at følge med på min rejse!</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
