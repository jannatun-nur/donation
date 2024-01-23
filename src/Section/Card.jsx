

const Card = ( {donations}) => {
    const {images ,name ,description} =donations;
    return (
        <div>
            <section className="">
                <div className="columns-1 gap-4 bg-yellow-300 p-6 lg:w-9/12">
                    <section>  
                    <img className="h-10 w-10 lg:h-16 lg:w-16 rounded-full lg:ml-16 ml-20" src={images} alt="" />
                    </section>
                    <section className="text-gray-800">
                            <p className="lg:text-2xl text-cyan-700">{name}</p>
                            <p className="text-xs lg:text-xs">{description}</p>
                    </section>
                </div>
	
           </section>
        </div>
    );
};

export default Card;