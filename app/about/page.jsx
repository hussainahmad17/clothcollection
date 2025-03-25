import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-8 md:py-12">
      <div className="flex flex-col gap-8">
        <section>
          <h1 className="text-4xl font-bold tracking-tight mb-4">About StyleHub</h1>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                StyleHub was founded in 2015 with a simple mission: to make quality fashion accessible to everyone. What
                started as a small boutique in downtown has grown into a global brand that serves customers worldwide.
              </p>
              <p className="text-lg mb-4">
                We believe that fashion is a form of self-expression, and everyone deserves to look and feel their best.
                Our team of designers and fashion experts work tirelessly to bring you the latest trends and timeless
                classics.
              </p>
              <p className="text-lg">
                At StyleHub, we're committed to ethical manufacturing practices and sustainable fashion. We carefully
                select our suppliers and partners to ensure that our products are not only stylish but also responsibly
                made.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/about.jpg" alt="Our store" fill className="object-cover" />
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p>
                We never compromise on quality. Each product is carefully inspected to ensure it meets our high
                standards.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p>
                We're committed to reducing our environmental footprint through sustainable practices and materials.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p>We constantly explore new designs, materials, and technologies to bring you the best in fashion.</p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Inclusivity</h3>
              <p>
                We design for everyone, regardless of size, age, or background. Fashion should be inclusive and
                accessible.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
              <p>Our customers are at the heart of everything we do. Your satisfaction is our top priority.</p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p>We believe in giving back to the communities we serve through various initiatives and partnerships.</p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Hussain Ahmad", role: "Founder & CEO", image: "/images/team/hussain.jpg" },
              { name: "Salahudin", role: "Creative Director", image: "/images/team/salahudin.jpg" },
              { name: "Aisha Patel", role: "Head of Design", image: "/images/team/aisha.jpg" },
              { name: "Awais", role: "Operations Manager", image: "/images/team/awais.jpg" },
            ].map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

