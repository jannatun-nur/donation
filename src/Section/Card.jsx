

const Card = ( {donations}) => {
    const {images ,name ,description} =donations;
    return (
        <div>
            <section className="">
                <div className="flex gap-4 bg-black">
                    <section>
                    <img className="h-10 w-10 lg:h-16 lg:w-16 rounded-full" src={images} alt="" />
                    </section>
                    <section>
                            <p>{name}</p>
                    </section>
                </div>
	
           </section>
        </div>
    );
};

export default Card;