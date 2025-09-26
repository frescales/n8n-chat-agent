// Nodo Code para n8n - Generador de Gráficos
// Coloca este nodo entre "AI Agent" y "Respond to Webhook"

const output = $input.first().json.output;

// Palabras clave que indican que se necesita un gráfico
const chartKeywords = [
  'gráfico', 'grafico', 'chart', 'visualizar', 'mostrar datos',
  'bar chart', 'line chart', 'pie chart', 'gráfica', 'grafica',
  'ventas por mes', 'datos mensuales', 'estadísticas', 'reporte visual'
];

// Detectar si se necesita un gráfico
const needsChart = chartKeywords.some(keyword => 
  output.toLowerCase().includes(keyword.toLowerCase())
);

if (needsChart) {
  // Detectar tipo de gráfico basado en palabras clave
  let chartType = 'bar'; // default
  
  if (output.toLowerCase().includes('line') || output.toLowerCase().includes('tendencia') || 
      output.toLowerCase().includes('evolución') || output.toLowerCase().includes('tiempo')) {
    chartType = 'line';
  } else if (output.toLowerCase().includes('pie') || output.toLowerCase().includes('pastel') || 
             output.toLowerCase().includes('proporción') || output.toLowerCase().includes('porcentaje')) {
    chartType = 'pie';
  }

  // Ejemplos de datos predefinidos (puedes conectar con tu base de datos real)
  const chartExamples = {
    ventas: {
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
      data: [12000, 19000, 15000, 25000, 22000, 30000]
    },
    empleados: {
      labels: ["Ventas", "Marketing", "IT", "RR.HH", "Operaciones"],
      data: [25, 15, 20, 8, 32]
    },
    productos: {
      labels: ["Producto A", "Producto B", "Producto C", "Producto D"],
      data: [30, 25, 20, 25]
    }
  };

  // Seleccionar datos basado en el contexto
  let selectedData = chartExamples.ventas; // default
  let title = "Datos de Ventas Mensuales";
  let label = "Ventas ($)";

  if (output.toLowerCase().includes('empleado') || output.toLowerCase().includes('personal') || 
      output.toLowerCase().includes('departamento')) {
    selectedData = chartExamples.empleados;
    title = "Empleados por Departamento";
    label = "Número de Empleados";
  } else if (output.toLowerCase().includes('producto')) {
    selectedData = chartExamples.productos;
    title = "Distribución de Productos";
    label = "Porcentaje de Ventas";
  }

  // Colores para diferentes tipos de gráfico
  const colors = {
    bar: {
      backgroundColor: [
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 99, 132, 0.8)',
        'rgba(255, 205, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)',
        'rgba(255, 159, 64, 0.8)'
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 205, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ]
    },
    line: {
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)'
    },
    pie: {
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 205, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)'
      ]
    }
  };

  // Crear estructura del gráfico
  const chartData = {
    type: "chart",
    chartType: chartType,
    title: title,
    data: {
      labels: selectedData.labels,
      datasets: [{
        label: label,
        data: selectedData.data,
        backgroundColor: chartType === 'line' ? colors.line.backgroundColor : 
                        (chartType === 'pie' ? colors.pie.backgroundColor : colors.bar.backgroundColor),
        borderColor: chartType === 'line' ? colors.line.borderColor : 
                    (chartType === 'pie' ? undefined : colors.bar.borderColor),
        borderWidth: chartType === 'pie' ? undefined : 1
      }]
    }
  };
  
  // Devolver como JSON string para que el webchat lo pueda parsear
  return [{ json: { output: JSON.stringify(chartData) } }];
} else {
  // Si no se necesita gráfico, devolver respuesta normal
  return [{ json: { output: output } }];
}