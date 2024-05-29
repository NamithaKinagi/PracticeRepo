const TrafficLight = () => {
  const trafficLight = [
    {
      color: "green",
      wait: 4000,
      next: "yellow",
    },
    {
      color: "yellow",
      wait: 500,
      next: "red",
    },
    {
      color: "red",
      wait: 3000,
      next: "green",
    },
  ];
  const [activeSignal, setActiveSignal] = useState("red");
  const currentLight = trafficLight.find((light) => light.color === activeSignal);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setActiveSignal(currentLight.next);
    }, currentLight.wait);

    return () => {
      clearTimeout(timerId);
    };
  }, [currentLight, activeSignal]);

  return (
    <div style={{ border: "2px solid black", width: "70px" }}>
      {trafficLight.map((light) => {
        return (
          <div
            style={{
              width: "50px",
              height: "50px",
              backgroundColor:
                activeSignal === light.color ? light.color : "grey",
              borderRadius: "50%",
              margin: "10px",
            }}
          />
        );
      })}
    </div>
  );
};
