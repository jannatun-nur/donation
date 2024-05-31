

const Card = ( {donations}) => {
    const {images ,name ,description} =donations;
    return (
        <div>
            <section className="">
                <div className="columns-1 gap-4 bg-yellow-300 p-6 lg:w-9/12 rounded-tr-3xl">
                    <section>  
                    <img className="h-14 w-14 lg:h-16 lg:w-16 rounded-full lg:ml-16 md:ml-36 ml-20" src={images} alt="" />
                    </section>
                    <section className="text-gray-800">
                            <p className="lg:text-xl text-center py-2 text-cyan-700">{name}</p>
                            <p className="text-xs lg:text-xs">{description}</p>
                    </section>
                </div>
	
           </section>
        </div>
    );
};

export default Card;