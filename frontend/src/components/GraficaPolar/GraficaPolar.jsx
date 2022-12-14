import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

// const template_data = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.5)',
//         'rgba(54, 162, 235, 0.5)',
//         'rgba(255, 206, 86, 0.5)',
//         'rgba(75, 192, 192, 0.5)',
//         'rgba(153, 102, 255, 0.5)',
//         'rgba(255, 159, 64, 0.5)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

const template_data = {
  // alcaldias y el color que le corresponde
  labels: [], 
  datasets: [
    {
      label: 'Numero de delitos por alcaldia',
      data: [], //valor que le corresponde a cada alcaldia
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderWidth: 1,
    },
  ],
};

function f1({Alcaldias}) {
  // console.log(Alcaldias)
  
  for (let i = 0; i < Alcaldias.length; i++) {
    // console.log(Alcaldias[i])
    const {Alcaldia,count}=Alcaldias[i]
    console.log(Alcaldia,count)
    template_data.labels.push(Alcaldia)
    template_data.datasets[0].data.push(count)
   }
}

const GraficaPolar=(Alcaldias)=> {

     f1(Alcaldias)
   


  return (
    <PolarArea data={template_data} />
    )
}
export default GraficaPolar
