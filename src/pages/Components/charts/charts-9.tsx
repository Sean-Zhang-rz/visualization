import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export const Chart9 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    // @ts-ignore
    var myChart = echarts.init(divRef.current);
  }, []);

  return (
    <div className="year-old-range-3">
      9<div ref={divRef} className="chart"></div>
    </div>
  );
};
