// components/LandingPage.jsx
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Users,
  BarChart,
  Zap,
  Shield,
  Calendar,
  Star,
  ArrowRight,
} from "lucide-react";
import Logo from "@/components/logo";
import femaleClientAvatar from "@/assets/female_client_avatar.avif"

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Logo url={`/`} />
            <span className="text-2xl font-bold text-gray-800">TeamSync</span>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600">
              Features
            </a>
            {/* <a href="#pricing" className="text-gray-600 hover:text-blue-600">
              Pricing
            </a> */}
            <Link to="/sign-in" className="text-gray-600 hover:text-blue-600">
              Sign In
            </Link>
            <Link
              to="/sign-in"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Streamline Your Team's
            <span className="text-blue-600"> Workflow</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            TeamSync helps B2B teams collaborate, manage projects, and track
            progress all in one place. Boost productivity with intelligent task
            management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/sign-in"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              Get Started Free
              <ArrowRight size={20} />
            </Link>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-gray-600 text-center text-lg mb-16 max-w-2xl mx-auto">
            Everything you need to manage your team's tasks efficiently
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Task Management
              </h3>
              <p className="text-gray-600">
                Create, assign, and track tasks with deadlines, priorities, and
                status updates.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Team Collaboration
              </h3>
              <p className="text-gray-600">
                Real-time updates, comments, and file sharing for seamless team
                collaboration.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Project Analytics
              </h3>
              <p className="text-gray-600">
                Track progress with detailed analytics, reports, and performance
                metrics.
              </p>
            </div>

            {/* Feature 4 */}
            {/* <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Automated Workflows
              </h3>
              <p className="text-gray-600">
                Set up automated task assignments, reminders, and progress
                tracking.
              </p>
            </div> */}

            {/* Feature 5 */}
            {/* <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Enterprise Security
              </h3>
              <p className="text-gray-600">
                Bank-level security with encryption, role-based access, and
                compliance features.
              </p>
            </div> */}

            {/* Feature 6 */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Calendar className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Calendar Integration
              </h3>
              <p className="text-gray-600">
                Sync with Google Calendar, Outlook, and other calendar
                applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 text-center text-lg mb-16 max-w-2xl mx-auto">
            Choose the plan that fits your team's needs. No hidden fees.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-500 transition">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-green-500 mr-3" />
                  <span>Up to 5 team members</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-green-500 mr-3" />
                  <span>Basic task management</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-green-500 mr-3" />
                  <span>500MB storage</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-green-500 mr-3" />
                  <span>Email support</span>
                </li>
              </ul>
              <Link
                to="/sign-in"
                className="block w-full bg-gray-100 text-gray-800 text-center py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
              >
                Get Started Free
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-blue-500 shadow-lg relative">
              <div className="absolute top-0 right-6 transform -translate-y-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  MOST POPULAR
                </span>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">$12</span>
                  <span className="text-gray-600 ml-2">/user/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-green-500 mr-3" />
                  <span>Unlimited team members</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-green-500 mr-3" />
                  <span>Advanced task management</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-green-500 mr-3" />
                  <span>20GB storage</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-green-500 mr-3" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-green-500 mr-3" />
                  <span>Custom workflows</span>
                </li>
              </ul>
              <Link
                to="/sign-in"
                className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Start Free Trial
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-500 transition">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Enterprise
                </h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-green-500 mr-3" />
                  <span>Unlimited everything</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-green-500 mr-3" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-green-500 mr-3" />
                  <span>On-premise deployment</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-green-500 mr-3" />
                  <span>SLA 99.9% uptime</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-green-500 mr-3" />
                  <span>Custom integrations</span>
                </li>
              </ul>
              <button className="w-full border-2 border-gray-300 text-gray-800 text-center py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <div className="flex justify-center">
              <Star className="w-12 h-12 text-yellow-400 mx-auto mb-6 fill-yellow-400" />
              <Star className="w-12 h-12 text-yellow-400 mx-auto mb-6 fill-yellow-400" />
              <Star className="w-12 h-12 text-yellow-400 mx-auto mb-6 fill-yellow-400" />
              <Star className="w-12 h-12 text-yellow-400 mx-auto mb-6 fill-yellow-400" />
            </div>
            <blockquote className="text-2xl text-gray-700 italic mb-8">
              "TeamSync transformed how our B2B team manages projects. We've
              seen a 40% increase in productivity since implementation."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full">
                <img
                  src={femaleClientAvatar}
                  alt="Sarah Chen"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="ml-4 text-left">
                <p className="font-semibold text-gray-900">Sarah Chen</p>
                <p className="text-gray-600">CTO at TechCorp</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Team's Productivity?
          </h2>
          <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of teams who trust TeamSync for their project
            management needs.
          </p>
          <Link
            to="/sign-in"
            className="inline-flex items-center bg-white text-blue-600 px-10 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition"
          >
            Get Started Free Today
            <ArrowRight className="ml-2" size={20} />
          </Link>
          <p className="text-blue-200 mt-6">No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <Logo url={`/`} />
              <span className="text-2xl font-bold text-white">TeamSync</span>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-gray-800">
            <p>© {new Date().getFullYear()} TeamSync. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
