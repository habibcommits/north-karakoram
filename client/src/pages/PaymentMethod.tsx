import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Banknote, MessageCircle, Users, CheckCircle } from "lucide-react";
import paymentHeaderImage from "@assets/stock_images/mountain_expedition__228548ef.jpg";

export default function PaymentMethod() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px]">
          <img
            src={paymentHeaderImage}
            alt="Payment Methods"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div>
              <p className="text-white/80 text-lg mb-2">Booking Essentials</p>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-white">
                Payment Options
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Introduction */}
            <div className="mb-12">
              <b><p className="text-muted-foreground text-lg mb-4 font-medium">
               Note that this payment method is only for locals 
              </p></b>
              <p className="text-muted-foreground text-lg mb-4 font-medium">
                To confirm your reservation, please remit an <span className="text-primary font-bold">advance deposit of 30%</span> per person.
              </p>
              <p className="text-muted-foreground mb-6">
                The <span className="text-primary font-bold">remaining 70% balance</span> is due upon your arrival. We accept payments via standard Bank Transfer or Mobile Banking services. Once the transaction is complete, please share the receipt along with the Names and CNIC numbers of all travelers via WhatsApp.
              </p>
              <Card className="p-6 bg-primary/5 border-primary/20 mb-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Currency Accepted</p>
                    <p className="font-medium text-lg">PKR (Pakistani Rupees)</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Required Deposit</p>
                    <p className="font-medium text-lg">30% Per Guest</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Bank Transfer */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-3xl mb-6 flex items-center gap-3">
                <Banknote className="w-8 h-8 text-primary" />
                Banking Details
              </h2>
              {/* Soneri Bank Account */}
              <Card className="p-8 bg-muted/30">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Bank Name</p>
                    <p className="font-medium text-lg">Soneri Bank</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Account Title</p>
                    <p className="font-medium text-lg">NORTH KARAKORAM TREKS & TOURS</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Account Number</p>
                    <p className="font-medium text-lg">20015237768</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">IBAN</p>
                    <p className="font-medium text-lg">PK91SONE0005220015237768</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Product Type</p>
                    <p className="font-medium text-lg">Soneri Ikhtiar Account</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Branch</p>
                    <p className="font-medium text-lg">Chandni Chowk RWP-0052</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Account Type</p>
                    <p className="font-medium text-lg">Current</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Account Status</p>
                    <p className="font-medium text-lg text-green-600">Active</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Payment Instructions */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-3xl mb-6 flex items-center gap-3">
                <MessageCircle className="w-8 h-8 text-primary" />
                Next Steps
              </h2>
              <Card className="p-8 bg-primary/5 border-primary/20">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                      1
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Save the Receipt</p>
                      <p className="text-muted-foreground text-sm">Please take a screenshot or photo of your transaction confirmation.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                      2
                    </div>
                    <div>
                      <p className="font-semibold mb-1">WhatsApp Us</p>
                      <p className="text-muted-foreground text-sm">Send the proof of payment to our official number: <span className="font-medium">+92 333 0228111</span></p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                      3
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Submit Guest Details</p>
                      <p className="text-muted-foreground text-sm">Include the full names and CNIC numbers for all members of your party.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Group Booking */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-3xl mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-primary" />
                Group Reservations
              </h2>
              <Card className="p-8 bg-muted/30">
                <p className="text-muted-foreground mb-4">
                  Traveling with a team? To ensure smooth processing of logistics and permits, please provide a compiled list of all attendees along with their CNIC/Passport numbers when submitting your deposit slip.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Check availability for large groups by contacting us beforehand.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Special discounts may apply for larger expeditions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Customized itineraries are available upon request.</span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* Security & Privacy */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-3xl mb-6">Data Privacy</h2>
              <Card className="p-8 bg-muted/30">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Your financial data is handled with strict confidentiality.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Payments are routed through verified banking channels.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Only transfer funds to the officially listed company accounts.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Digital receipts can be provided for your records.</span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* FAQs */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-3xl mb-6">Common Questions</h2>
              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-2">What happens after I pay the 30% deposit?</h3>
                  <p className="text-muted-foreground text-sm">Once we receive your funds and guest details, your slot is secured. We will promptly send you a booking confirmation message and itinerary details via WhatsApp or Email.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-2">When is the remaining 70% due?</h3>
                  <p className="text-muted-foreground text-sm">The outstanding balance is collected just before the tour begins or upon your arrival at the destination. We will send a courtesy reminder as your trip date approaches.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Do you accept international transfers?</h3>
                  <p className="text-muted-foreground text-sm">Yes, we welcome international guests. Please reach out to us for specific SWIFT/IBAN details to facilitate a smooth international transaction.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-2">What is the cancellation policy?</h3>
                  <p className="text-muted-foreground text-sm">Refunds depend on the timing of the cancellation. Generally, cancellations 30+ days prior receive an 80% refund. Please refer to our terms and conditions for full details.</p>
                </Card>
              </div>
            </div>

            {/* Contact for Confirmation */}
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
              <p className="text-muted-foreground mb-4">
                Have questions regarding payments or availability? Reach out to us directly:
              </p>
              <div className="space-y-2">
                <p className="font-heading font-bold text-2xl">+92 333 0228111</p>
                <p className="text-muted-foreground">WhatsApp: Active 24/7</p>
                <p className="text-muted-foreground text-sm mt-3 mb-6">Email: info@northkarakoram.com</p>
                <Button className="mt-6" data-testid="button-contact-whatsapp">
                  Contact via WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
