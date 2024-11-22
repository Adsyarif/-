const HomePage = () => {
  interface category {
    id: number;
    title: string;
  }

  const categories: category[] = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Jackets",
    },
    {
      id: 3,
      title: "Sneakers",
    },
    {
      id: 4,
      title: "Womens",
    },
    {
      id: 5,
      title: "Mens",
    },
  ];

  return (
    <>
      <div className="categories-container my-20">
        {categories.map((category) => (
          <div className="category-container">
            {<img />}
            <div key={category.id} className="category-body-container">
              <h2>{category.title}</h2>
              <p>Shop now</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
