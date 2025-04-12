import React, { useRef } from 'react';
import { getData, zoomConfig, simpleColumns } from "../data";
import { Gantt } from "wx-react-gantt";

export default function GanttChart({ skinSettings }) {
	const apiRef = useRef(null);
	const data = getData();

	return (
		<div className="demo-rows">
			<div className="demo-gantt">
				<Gantt
					{...skinSettings}
					tasks={data.tasks}
					links={data.links}
					zoom={zoomConfig}
					api={apiRef}
					cellHeight={32}
				/>
			</div>
		</div>
	);
}