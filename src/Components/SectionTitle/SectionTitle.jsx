const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-3/12">
            <p className="text-yellow-800 mb-2">----{subHeading}----</p>
            <h3 className="text-2xl uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;