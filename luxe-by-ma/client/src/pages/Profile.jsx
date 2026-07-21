import MainLayout from "../layouts/MainLayout";
import heroImage from "../assets/images/bag-12.png";

function Profile() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <MainLayout>

      {/* Hero */}

      <section className="relative h-[350px] overflow-hidden">

        <img
          src={heroImage}
          alt="My Account"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative flex h-full items-center justify-center">

          <div className="text-center text-white">

            <p className="uppercase tracking-[0.3em] text-sm">
              Welcome
            </p>

            <h1 className="text-5xl font-semibold mt-4">
              My Account
            </h1>

          </div>

        </div>

      </section>

      {/* Profile */}

      <section className="max-w-3xl mx-auto px-6 py-20">

        <div className="bg-gray-50 rounded-3xl shadow-sm p-10">

          <h2 className="text-3xl font-semibold mb-8">
            Account Information
          </h2>

          <div className="space-y-6">

            <div>
              <p className="text-gray-500 text-sm">
                Full Name
              </p>

              <h3 className="text-xl font-medium">
                {user?.full_name}
              </h3>
            </div>

            <hr />

            <div>
              <p className="text-gray-500 text-sm">
                Email
              </p>

              <h3 className="text-xl font-medium">
                {user?.email}
              </h3>
            </div>

            <hr />

            <div>
              <p className="text-gray-500 text-sm">
                Password
              </p>

              <h3 className="text-xl font-medium">
                ••••••••••••
              </h3>
            </div>

          </div>

        </div>

      </section>

    </MainLayout>
  );
}

export default Profile;