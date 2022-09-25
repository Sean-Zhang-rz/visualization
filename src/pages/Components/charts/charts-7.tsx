import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export const Chart7 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    // @ts-ignore
    var myChart = echarts.init(divRef.current);
  }, []);

  return (
    <div className="year-old-range-1">
      7<div ref={divRef} className="chart"></div>
    </div>
  );
};
