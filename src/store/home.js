 const url = `https://fsd-project-e2e42-default-rtdb.firebaseio.com/posts.json`;
    export  const fetchData = async () => {
        const response = await fetch(url);
  
        if (!response.ok) {
          throw new Error("Could not fetch data!");
        }
  
        const data = await response.json();
  
        return data;
      };
  
  