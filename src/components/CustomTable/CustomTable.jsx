import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./CustomTable.module.css";
import back from "../../assets/images/pic18.webp";

const CustomTable = () => {
  const { t } = useTranslation("customTable");

  const tableData = [
    [
      {
        content: t("1"),
        noBorder: false,
        customClass: "highlight",
        targetId: "full-body-massage",
      },
      {
        content: t("1"),
        noBorder: false,
        customStyle: {
          fontSize: "18px",
          lineHeight: "18px",
          backgroundColor: "#4D3D3133",
          borderRight: "none",
          id: "full-body-massage",
        },
      },
      {
        content: " ",
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D3133",
          borderLeft: "none",
        },
      },
    ],
    [
      {
        content: t("2"),
        noBorder: false,

        customClass: "highlight",
        targetId: "brows",
      },
      {
        content: t("top1"),
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D311A",
        },
      },
      {
        content: t("top2"),
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D311A",
        },
      },
    ],
    [
      {
        content: t("3"),
        noBorder: false,

        customClass: "highlight",
        targetId: "lashes",
      },
      { content: t("1.1"), noBorder: false },
      { content: " ", noBorder: false },
    ],
    [
      {
        content: t("4"),
        noBorder: false,

        customClass: "highlight",
        targetId: "lash-extensions",
      },
      { content: t("1.2"), noBorder: false },
      { content: " ", noBorder: false },
    ],
    [
      {
        content: t("5"),
        noBorder: false,

        customClass: "highlight",
        targetId: "facial-treatment",
      },
      { content: t("1.3"), noBorder: false },
      { content: " ", noBorder: false },
    ],
    [
      {
        content: "Chemical Peel",
        noBorder: false,

        customClass: "highlight",
        targetId: "chemical-peel",
      },
      { content: t("1.4"), noBorder: false },
      { content: " ", noBorder: false },
    ],
    [
      {
        content: t("7"),
        noBorder: false,

        customClass: "highlight",
        targetId: "wax",
      },
      {
        content: t("2"),
        noBorder: false,
        customStyle: {
          fontSize: "18px",
          lineHeight: "18px",
          backgroundColor: "#4D3D3133",
        },
        id: "brows",
      },
      {
        content: " ",
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D3133",
          borderLeft: "none",
        },
      },
    ],
    [
      {
        content: t("8"),
        noBorder: false,

        customClass: "highlight",
        targetId: "haircut-color-style",
      },
      {
        content: t("top1"),
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D311A",
        },
      },
      {
        content: t("top2"),
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D311A",
        },
      },
    ],
    [
      {
        content: t("9"),
        noBorder: false,

        customClass: "highlight",
        targetId: "tattoo",
      },
      { content: t("2.1"), noBorder: false },
      { content: "$40", noBorder: false },
    ],
    [
      {
        content: t("10"),
        noBorder: false,

        customClass: "highlight",
        targetId: "permanent",
      },
      { content: t("2.2"), noBorder: false },
      { content: " $40", noBorder: false },
    ],
    [
      {
        content: t("11"),
        noBorder: false,

        customClass: "highlight",
        targetId: "make-up",
      },
      { content: t("2.3"), noBorder: false },
      { content: "$70", noBorder: false },
    ],
    [
      {
        content: t("12"),
        noBorder: false,
        customClass: "highlight",
        targetId: "manicure",
      },
      {
        content: t("2.4"),
        noBorder: false,
      },
      { content: "$110", noBorder: false },
    ],
    [
      {
        content: t("13"),
        noBorder: false,
        customClass: "highlight",
        targetId: "pedicure",
      },
      {
        content: t("3"),
        noBorder: false,
        customStyle: {
          fontSize: "18px",
          lineHeight: "18px",
          backgroundColor: "#4D3D3133",
          borderRight: "none",
        },
        id: "lashes",
      },
      {
        content: " ",
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D3133",
          borderLeft: "none",
        },
      },
    ],
    [
      { content: "", noBorder: true },
      {
        content: t("top1"),
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D311A",
        },
      },
      {
        content: t("top2"),
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D311A",
        },
      },
    ],
    [
      { content: "", noBorder: true },
      { content: t("2.2"), noBorder: false },
      { content: "$40", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("3.2"), noBorder: false },
      { content: "$110", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      {
        content: t("4"),
        noBorder: false,
        customStyle: {
          fontSize: "18px",
          lineHeight: "18px",
          backgroundColor: "#4D3D3133",
          borderRight: "none",
        },
        id: "lash-extensions",
      },
      {
        content: "",
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D3133",
          borderLeft: "none",
        },
      },
    ],
    [
      { content: "", noBorder: true },
      {
        content: t("top1"),
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D311A",
        },
      },
      {
        content: t("top2"),
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D311A",
        },
      },
    ],
    [
      { content: "", noBorder: true },
      { content: t("4.1"), noBorder: false },
      { content: "$90", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: "2D-3D", noBorder: false },
      { content: "$130", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("4.3"), noBorder: false },
      { content: "$60", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("4.4"), noBorder: false },
      { content: "$80", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("4.5"), noBorder: false },
      { content: "$20", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      {
        content: t("5"),
        noBorder: false,
        customStyle: {
          fontSize: "18px",
          lineHeight: "18px",
          backgroundColor: "#4D3D3133",
          borderRight: "none",
        },
        id: "facial-treatment",
      },
      {
        content: " ",
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D3133",
          borderLeft: "none",
        },
      },
    ],
    [
      { content: "", noBorder: true },
      {
        content: t("top1"),
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D311A",
        },
      },
      {
        content: t("top2"),
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D311A",
        },
      },
    ],
    [
      { content: "", noBorder: true },
      { content: t("5.1"), noBorder: false },
      { content: "$140", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("5.2"), noBorder: false },
      { content: "$220", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("5.3"), noBorder: false },
      { content: "$145", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("5.4"), noBorder: false },
      { content: "$170", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("5.5"), noBorder: false },
      { content: "$110", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("5.6"), noBorder: false },
      { content: "$60", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("5.7"), noBorder: false },
      { content: "$200", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("5.8"), noBorder: false },
      { content: "$120", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("5.9"), noBorder: false },
      { content: "$60", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("5.10"), noBorder: false },
      { content: "$20", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("5.11"), noBorder: false },
      { content: "$170", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("5.12"), noBorder: false },
      { content: "$140", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("5.13"), noBorder: false },
      { content: "$60", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("5.14"), noBorder: false },
      { content: "$60", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      {
        content: t("6"),
        noBorder: false,
        customStyle: {
          fontSize: "18px",
          lineHeight: "18px",
          backgroundColor: "#4D3D3133",
          borderRight: "none",
        },
        id: "chemical-peel",
      },
      {
        content: " ",
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D3133",
          borderLeft: "none",
        },
      },
    ],
    [
      { content: "", noBorder: true },
      {
        content: t("top1"),
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D311A",
        },
      },
      {
        content: t("top2"),
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D311A",
        },
      },
    ],
    [
      { content: "", noBorder: true },
      { content: "PRX T-33", noBorder: false },
      { content: "$200", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("6.2"), noBorder: false },
      { content: "$120", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("6.3"), noBorder: false },
      { content: "$120", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("6.4"), noBorder: false },
      { content: "$130", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("6.5"), noBorder: false },
      { content: "$70", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("6.6"), noBorder: false },
      { content: "$120", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("6.7"), noBorder: false },
      { content: "$120", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      {
        content: t("7"),
        noBorder: false,
        customStyle: {
          fontSize: "18px",
          lineHeight: "18px",
          backgroundColor: "#4D3D3133",
          borderRight: "none",
        },
        id: "wax",
      },
      {
        content: " ",
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D3133",
          borderLeft: "none",
        },
      },
    ],
    [
      { content: "", noBorder: true },
      {
        content: t("top1"),
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D311A",
        },
      },
      {
        content: t("top2"),
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D311A",
        },
      },
    ],
    [
      { content: "", noBorder: true },
      { content: t("7.1"), noBorder: false },
      { content: "$30", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("7.2"), noBorder: false },
      { content: "$30", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("7.3"), noBorder: false },
      { content: "$40", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("7.4"), noBorder: false },
      { content: "$40", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("7.5"), noBorder: false },
      { content: "$45", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("7.6"), noBorder: false },
      { content: "$70", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("7.7"), noBorder: false },
      { content: "$40", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("7.8"), noBorder: false },
      { content: "$70", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("7.9"), noBorder: false },
      { content: "$35", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("7.10"), noBorder: false },
      { content: "$60+", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("7.11"), noBorder: false },
      { content: "$40", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("7.12"), noBorder: false },
      { content: "$80", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("7.13"), noBorder: false },
      { content: "$40", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      {
        content: t("8"),
        noBorder: false,
        customStyle: {
          fontSize: "18px",
          lineHeight: "18px",
          backgroundColor: "#4D3D3133",
          borderRight: "none",
        },
        id: "haircut-color-style",
      },
      {
        content: " ",
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D3133",
          borderLeft: "none",
        },
      },
    ],
    [
      { content: "", noBorder: true },
      {
        content: t("top1"),
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D311A",
        },
      },
      {
        content: t("top2"),
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D311A",
        },
      },
    ],
    [
      { content: "", noBorder: true },
      { content: t("8.1"), noBorder: false },
      { content: "$50+", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("8.2"), noBorder: false },
      { content: "$80+", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("8.3"), noBorder: false },
      { content: "$50+", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("8.4"), noBorder: false },
      { content: "$45+", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("8.5"), noBorder: false },
      { content: "$30+", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("8.6"), noBorder: false },
      { content: "$45+", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("8.7"), noBorder: false },
      { content: "$100+", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("8.8"), noBorder: false },
      { content: "$180+", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("8.9"), noBorder: false },
      { content: "$250+", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("8.10"), noBorder: false },
      { content: "$200+", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("8.11"), noBorder: false },
      { content: "$300+", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("8.12"), noBorder: false },
      { content: "$250+", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("8.13"), noBorder: false },
      { content: "$170+", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("8.14"), noBorder: false },
      { content: "$150+", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("8.15"), noBorder: false },
      { content: "$150+", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("8.16"), noBorder: false },
      { content: "$150+", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("8.17"), noBorder: false },
      { content: "$150+", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      {
        content: t("9"),
        noBorder: false,
        customStyle: {
          fontSize: "18px",
          lineHeight: "18px",
          backgroundColor: "#4D3D3133",
          borderRight: "none",
        },
        id: "tattoo",
      },
      {
        content: " ",
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D3133",
          borderLeft: "none",
        },
      },
    ],
    [
      { content: "", noBorder: true },
      {
        content: t("top1"),
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D311A",
        },
      },
      {
        content: t("top2"),
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D311A",
        },
      },
    ],
    [
      { content: "", noBorder: true },
      { content: t("9.1"), noBorder: false },
      { content: "$120+", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("9.2"), noBorder: false },
      { content: "$200+", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("9.3"), noBorder: false },
      { content: "$250 per hour", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      {
        content: t("10"),
        noBorder: false,
        customStyle: {
          fontSize: "18px",
          lineHeight: "18px",
          backgroundColor: "#4D3D3133",
          borderRight: "none",
        },
        id: "permanent",
      },
      {
        content: " ",
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D3133",
          borderLeft: "none",
        },
      },
    ],
    [
      { content: "", noBorder: true },
      {
        content: t("top1"),
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D311A",
        },
      },
      {
        content: t("top2"),
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D311A",
        },
      },
    ],
    [
      { content: "", noBorder: true },
      { content: t("10.1"), noBorder: false },
      { content: "$400", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("10.2"), noBorder: false },
      { content: "$400", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("10.3"), noBorder: false },
      { content: "$250", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("10.4"), noBorder: false },
      { content: "$200", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("10.5"), noBorder: false },
      { content: "$350", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      {
        content: t("11"),
        noBorder: false,
        customStyle: {
          fontSize: "18px",
          lineHeight: "18px",
          backgroundColor: "#4D3D3133",
          borderRight: "none",
        },
        id: "make-up",
      },
      {
        content: " ",
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D3133",
          borderLeft: "none",
        },
      },
    ],
    [
      { content: "", noBorder: true },
      {
        content: t("top1"),
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D311A",
        },
      },
      {
        content: t("top2"),
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D311A",
        },
      },
    ],
    [
      { content: "", noBorder: true },
      { content: t("11.1"), noBorder: false },
      { content: "$140+", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("11.2"), noBorder: false },
      { content: "$100+", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("11.3"), noBorder: false },
      { content: "$70", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("11.4"), noBorder: false },
      { content: "$200+", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("11.5"), noBorder: false },
      { content: "$140", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      {
        content: t("12"),
        noBorder: false,
        customStyle: {
          fontSize: "18px",
          lineHeight: "18px",
          backgroundColor: "#4D3D3133",
          borderRight: "none",
        },
        id: "manicure",
      },
      {
        content: " ",
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D3133",
          borderLeft: "none",
        },
      },
    ],
    [
      { content: "", noBorder: true },
      {
        content: t("top1"),
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D311A",
        },
      },
      {
        content: t("top2"),
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D311A",
        },
      },
    ],
    [
      { content: "", noBorder: true },
      { content: t("12.1"), noBorder: false },
      { content: "$65", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("12.2"), noBorder: false },
      { content: "$40", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("12.3"), noBorder: false },
      { content: "$35", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("12.4"), noBorder: false },
      { content: "$35", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("12.5"), noBorder: false },
      { content: "$40", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("12.6"), noBorder: false },
      { content: "$25", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("12.7"), noBorder: false },
      { content: "$100", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("12.8"), noBorder: false },
      { content: "$40", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("12.9"), noBorder: false },
      { content: "$80", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("12.10"), noBorder: false },
      { content: "$5", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      {
        content: t("13"),
        noBorder: false,
        customStyle: {
          fontSize: "18px",
          lineHeight: "18px",
          backgroundColor: "#4D3D3133",
          borderRight: "none",
        },
        id: "pedicure",
      },
      {
        content: " ",
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D3133",
          borderLeft: "none",
        },
      },
    ],
    [
      { content: "", noBorder: true },
      {
        content: t("top1"),
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D311A",
        },
      },
      {
        content: t("top2"),
        noBorder: false,
        customStyle: {
          backgroundColor: "#4D3D311A",
        },
      },
    ],
    [
      { content: "", noBorder: true },
      { content: t("13.1"), noBorder: false },
      { content: "$70", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("13.2"), noBorder: false },
      { content: "$55", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("13.3"), noBorder: false },
      { content: "$60", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("13.4"), noBorder: false },
      { content: "$65", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("13.5"), noBorder: false },
      { content: "$60", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("13.6"), noBorder: false },
      { content: "$65", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("13.7"), noBorder: false },
      { content: "$30", noBorder: false },
    ],
    [
      { content: "", noBorder: true },
      { content: t("13.8"), noBorder: false },
      { content: "$5", noBorder: false },
    ],
  ];

  const handleClick = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className={styles.price}>
      {" "}
      <div className={styles.customTable}>
        <h2 className={styles.title}>
          {t("title1")}
          <span style={{ fontFamily: "Inter", fontStyle: "italic" }}>
            {t("title2")}
          </span>
        </h2>
        <div className={styles.imageContainer}>
          <img src={back} alt="back" />
        </div>
        {tableData.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.tableRow}>
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className={`
           ${styles.tableCell} 
           ${cell.noBorder ? styles.noBorder : ""} 
           ${cell.customClass ? styles[cell.customClass] : ""}
         `}
                style={cell.customStyle}
                onClick={
                  cellIndex === 0 && cell.targetId // Обработчик клика только для первой колонки
                    ? () => handleClick(cell.targetId)
                    : null
                }
                id={cell.id ? cell.id : null} // Добавляем ID, если он есть
              >
                {cell.content}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomTable;
