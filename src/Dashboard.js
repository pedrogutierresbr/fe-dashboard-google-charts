import React, { useState, useEffect } from "react";
import Chart from "react-google-charts";

import "./dashboard.css";

function Dashboard() {
    const TITULO = "Quantidade de cadastros primeiro semestre";
    const ANIMACAO = { duration: 1200, easing: "out", startup: true };
    const [dados, setDados] = useState([
        ["Mês", "Quantidades"],
        ["Janeiro", 33],
        ["Fevereiro", 68],
        ["Março", 49],
        ["Abril", 15],
        ["Maio", 80],
        ["Junho", 27],
    ]);

    // ciclos de vida do useEffect:
    // inicial quando carrega a página
    // update quando dados é modificado
    // destruir componente para iniciar outro bloco de dados evitando looping infinito
    //por isso o return no useEffect, o código ali dentro é executa somente depois do componente ser destuido
    useEffect(() => {
        function alterarDados() {
            const dadosGraficos = dados.map((linha) => {
                if (Number.isInteger(linha[1])) {
                    linha[1] = Math.floor(Math.random() * 100);
                }
                return linha;
            });
            setDados(dadosGraficos);
        }

        const intervalId = setInterval(() => alterarDados(), 5000);

        return () => {
            //
            clearInterval(intervalId);
        };
    }, [dados]);

    return (
        <div className="container">
            <h1>Dashboards</h1>
            <div className="container-charts">
                <div className="container-chart">
                    <Chart
                        width={"400px"}
                        height={"300px"}
                        chartType="PieChart"
                        data={dados}
                        options={{ title: TITULO }}
                    />

                    <Chart
                        width={"400px"}
                        height={"300px"}
                        chartType="PieChart"
                        data={dados}
                        options={{ title: TITULO, is3D: true }}
                    />

                    <Chart
                        width={"400px"}
                        height={"300px"}
                        chartType="PieChart"
                        data={dados}
                        options={{ title: TITULO, pieHole: 0.4 }}
                    />
                </div>

                <div className="container-chart">
                    <Chart
                        width={"400px"}
                        height={"300px"}
                        chartType="BarChart"
                        data={dados}
                        options={{
                            title: TITULO,
                            chartArea: { width: "50%" },
                            hAxis: { title: "Quantidade" },
                            vAxis: { title: "Mês" },
                            animation: ANIMACAO,
                        }}
                    />

                    <Chart
                        width={"400px"}
                        height={"300px"}
                        chartType="LineChart"
                        data={dados}
                        options={{
                            title: TITULO,
                            hAxis: { title: "Quantidade" },
                            vAxis: { title: "Mês" },
                            animation: ANIMACAO,
                        }}
                    />

                    <Chart
                        width={"400px"}
                        height={"300px"}
                        chartType="AreaChart"
                        data={dados}
                        options={{
                            title: TITULO,
                            hAxis: { title: "Quantidade" },
                            vAxis: { title: "Mês" },
                            animation: ANIMACAO,
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
