import Row from "react-bootstrap/Row";
import FutureForecastStatCol from "./FutureForecastStatCol";

function FutureForecastStat({
  loading,
  cloudData,
  humidityData,
  precData,
  liftedIndexData,
  tempData,
}) {
  return (
    <>
      <Row className="mt-2 d-none d-md-flex justify-content-center ">
        <FutureForecastStatCol
          loading={loading}
          statData={cloudData}
          title={"Cloud Coverage"}
        />
        <FutureForecastStatCol
          loading={loading}
          statData={liftedIndexData}
          title={"Lifted Index"}
        />
        <FutureForecastStatCol
          loading={loading}
          statData={tempData}
          title={"Temperature"}
        />
        <FutureForecastStatCol
          loading={loading}
          statData={precData}
          title={"Percipitation Amount"}
        />
        <FutureForecastStatCol
          loading={loading}
          statData={humidityData}
          title={"Humidty"}
        />
      </Row>
    </>
  );
}

export default FutureForecastStat;
