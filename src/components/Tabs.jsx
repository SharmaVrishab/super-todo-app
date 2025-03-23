import React from "react";

export function Tabs(props) {
  const { todos, selectedTab, SetSelectedTab } = props;
  const tabs = ["ALL", "Open", "Completed"];
  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        const numOfTasks =
          tab === "ALL"
            ? todos.length
            : tab === "Open"
            ? todos.filter((val) => !val.complete).length
            : todos.filter((val) => val.complete).length;

        return (
          <button
            onClick={() => {
              SetSelectedTab(tab);
            }}
            //   key={tabIndex}
            //   className={
            //     "tab-button " + (tab === selectedTab ? "tab-selected" : " ")
            //   }
            // >
            //   <h4>
            //     {tab}
            //     <span> {" - (" + numoftask + ")"}</span>
            //   </h4>
            key={tabIndex}
            className={
              "tab-button " + (tab == selectedTab ? " tab-selected" : " ")
            }
          >
            <h4>
              {tab} <span>({numOfTasks})</span>
            </h4>
          </button>
        );
      })}
      <hr />
    </nav>
  );
}
