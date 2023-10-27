import development from "../../../public/Screenshot 2023-10-21 194538.png";
import Services from "./Services/Services";
const Service = () => {
  return (
    <section className="md:py-20 pb-20 pt-32 bg-bodybc md:ml-64 px-5 md:h-screen min-h-[230vh]" id="service">
      <h4 className="text-gb text-xl tracking-wide font-medium text-center">
        MY SERVICE
      </h4>
      <h1 className="text-white text-4xl font-medium leading-tight mb-40 text-center">
        Global ERP Project Implementation, Oracle ERP, SAP{" "}
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-4 space-y-96">
        <Services
          text="Lorem ipsum"
          img={development}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed autem commodi deserunt."
        />
        <Services
          text="Lorem ipsum"
          img={development}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed autem commodi deserunt."
        />
        <Services
          text="Lorem ipsum"
          img={development}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed autem commodi deserunt."
        />
      </div>
    </section>
  );
};

export default Service;
