import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export const Chart8 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    // @ts-ignore
    var myChart = echarts.init(divRef.current);
  }, []);

  return (
    <div className="year-old-range-2">
      8<div ref={divRef} className="chart"></div>
    </div>
  );
};
