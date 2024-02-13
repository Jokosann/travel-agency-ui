import { dataDestinations } from '../data/data';
import { svg } from '../utils/assets';

const Destinations = () => {
    return (
        <div className="flex flex-col">
            <div className="w-full mb-14">
                <p className="text-center font-poppins font-medium text-black-light mb-2">
                    Top Selling
                </p>
                <h1 className="text-center font-volkhov text-3xl font-bold">
                    Top Destinations
                </h1>
            </div>
            <div className="max-w-3xl w-full mx-auto card__destinations">
                {dataDestinations.map((item) => (
                    <div
                        key={item.id}
                        className="aspect-[1/1.6] relative overflow-hidden shadow-lg rounded-2xl"
                    >
                        <div className="w-full h-full overflow-hidden cursor-pointer">
                            <img
                                src={item.img}
                                alt={item.img}
                                className="w-full object-cover"
                            />
                        </div>
                        <div className="absolute bottom-0 bg-light w-full p-5 flex flex-col gap-3">
                            <div className="flex justify-between">
                                <p className="text-black-light text-lg font-medium">
                                    {item.place}
                                </p>
                                <span className="text-black-light font-medium">
                                    {item.price}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 mb-4">
                                <img src={svg.Maps} alt={svg.Maps} className="w-4" />
                                <p className="text-black-light font-medium">{item.trip}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Destinations;
