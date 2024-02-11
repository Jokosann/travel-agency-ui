import { dataCategory } from '../data/data';

const Category = () => {
    return (
        <div className="flex flex-col">
            <div className="w-full mb-14">
                <p className="text-center font-poppins font-medium text-black-light mb-2">
                    Category
                </p>
                <h1 className="text-center font-volkhov text-3xl font-bold">
                    We Offer Best Services
                </h1>
            </div>
            <div className="w-full card__category">
                {dataCategory.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-between gap-4 px-8 py-12 bg-light rounded-2xl shadow-lg"
                    >
                        <div className="flex justify-center items-center h-[154px]">
                            <img src={item.icon} alt={item.icon} />
                        </div>
                        <div className="h-full">
                            <p className="text-center text-black-dark font-bold capitalize">
                                {item.title}
                            </p>
                            <p className="text-center text-black-light whitespace-pre-line">
                                {item.fill}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
