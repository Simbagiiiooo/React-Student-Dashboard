const wincTheme = {
    axis: {
        style: {
            axisLabel: {
                textAnchor: "middle",
                fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
                fontSize: 12,
                letterSpacing: "normal",
                padding: 2,
                fill: "#455A64",
                stroke: "transparent",
                strokeWidth: 0
            },
            grid: {
                fill: "none",
                stroke: "none"
            },
            tickLabels: {
                fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
                fontSize: 6,
                letterSpacing: "normal",
                padding: 15,
                angle: 35,
                fill: "#455A64",
                stroke: "transparent",
                strokeWidth: 0
            }
        },
    },
    chart: {
        width: 800,
        height: 200,
        padding: 40
    },
    group: {
        colorScale: [
            "#FDCA40",
            "#A799B7"
        ],
    },
    line: {
        style: {
            data: {
                fill: "transparent",
                opacity: 1,
                strokeWidth: 2
            },
        },
    },
};
export default wincTheme 