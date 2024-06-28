import { FC } from "react";

interface IProps {
  color: string;
}

const sports: FC<IProps> = ({ color }) => {
  return (
    <div>
      <svg
        fill={color}
        height="800px"
        width="800px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        // xml:space="preserve"
      >
        <g>
          <g>
            <path
              d="M510.704,302.195c-19.899-31.901-47.686-58.561-80.359-77.098c-33.706-19.124-72.125-29.231-111.101-29.231
			c-2.533,0-5.065,0.048-7.592,0.132c-8.115-20.231-20.448-38.937-35.951-54.405c-30.5-30.422-71.024-47.177-114.106-47.177
			c-43.077,0-83.604,16.754-114.118,47.177C16.861,172.13,0,212.761,0,255.999c0,43.239,16.861,83.869,47.478,114.407
			c30.512,30.422,71.039,47.174,114.117,47.174c24.962,0,49.749-5.834,71.961-16.885c27.046,11.095,56.206,16.888,85.688,16.888
			c38.976,0,77.394-10.109,111.101-29.233c32.672-18.537,60.46-45.197,80.359-77.098
			C512.432,308.482,512.432,304.967,510.704,302.195z M293.645,197.351c-18.093,2.064-35.864,6.278-52.878,12.582
			c6.156-18.326,15.951-35.22,28.893-49.789C279.495,171.246,287.628,183.867,293.645,197.351z M170.154,111.792
			c32.543,1.89,63.056,14.533,87.399,36.219c-18.108,20.127-30.806,44.294-37.042,70.583c-4.185,2.038-8.312,4.202-12.368,6.503
			c-11.435,6.488-22.253,13.99-32.362,22.342h-5.627V111.792z M153.036,111.791v135.648h-46.221
			c-1.922-37.09-16.318-71.851-41.172-99.442C89.993,126.319,120.502,113.681,153.036,111.791z M53.52,160.127
			c21.644,24.33,34.258,54.798,36.145,87.312H17.376C19.262,214.924,31.878,184.456,53.52,160.127z M17.376,264.557h72.289
			c-1.886,32.515-14.501,62.983-36.145,87.314C31.877,327.541,19.262,297.071,17.376,264.557z M153.036,400.205
			c-32.534-1.89-63.044-14.527-87.393-36.205c24.854-27.589,39.25-62.352,41.172-99.443h46.221v4.453
			c-9.399,10.244-17.87,21.352-25.251,33.186c-1.729,2.772-1.729,6.287,0,9.059c7.381,11.833,15.852,22.941,25.251,33.184V400.205z
			 M145.217,306.725c8.461-12.813,18.335-24.635,29.35-35.269v70.539C163.552,331.359,153.677,319.537,145.217,306.725z
			 M170.154,400.205v-39c11.68,10.309,24.404,19.439,37.989,27.148c1.615,0.916,3.25,1.793,4.887,2.668
			C199.34,396.22,184.842,399.332,170.154,400.205z M446.804,356.841c-7.886,6.118-16.206,11.686-24.906,16.624
			c-31.136,17.666-66.633,27.003-102.654,27.003c-36.021,0-71.518-9.337-102.654-27.003c-8.7-4.937-17.02-10.505-24.905-16.624
			v-100.23c7.884-6.119,16.204-11.688,24.905-16.624c31.136-17.664,66.633-27.003,102.654-27.003
			c36.02,0,71.518,9.337,102.654,27.003c8.702,4.937,17.021,10.506,24.906,16.625V356.841z M463.921,341.993v-70.538
			c11.015,10.635,20.888,22.456,29.35,35.268C484.81,319.537,474.937,331.359,463.921,341.993z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M427.067,298.166h-16.523v-11.905c0-4.727-3.832-8.559-8.559-8.559c-4.727,0-8.559,3.832-8.559,8.559v11.905h-24.254
			v-11.905c0-4.727-3.832-8.559-8.559-8.559c-4.727,0-8.559,3.832-8.559,8.559v11.905h-24.252v-11.905
			c0-4.727-3.832-8.559-8.559-8.559c-4.727,0-8.559,3.832-8.559,8.559v11.905h-24.252v-11.905c0-4.727-3.832-8.559-8.559-8.559
			c-4.727,0-8.559,3.832-8.559,8.559v11.905h-24.254v-11.905c0-4.727-3.832-8.559-8.559-8.559c-4.727,0-8.559,3.832-8.559,8.559
			v11.905H211.42c-4.727,0-8.559,3.832-8.559,8.559c0,4.727,3.832,8.559,8.559,8.559h16.523v11.904c0,4.727,3.832,8.559,8.559,8.559
			c4.727,0,8.559-3.832,8.559-8.559v-11.904h24.254v11.904c0,4.727,3.832,8.559,8.559,8.559c4.727,0,8.559-3.832,8.559-8.559
			v-11.904h24.252v11.904c0,4.727,3.832,8.559,8.559,8.559c4.727,0,8.559-3.832,8.559-8.559v-11.904h24.252v11.904
			c0,4.727,3.832,8.559,8.559,8.559c4.727,0,8.559-3.832,8.559-8.559v-11.904h24.253v11.904c0,4.727,3.832,8.559,8.559,8.559
			c4.727,0,8.559-3.832,8.559-8.559v-11.904h16.523c4.727,0,8.559-3.832,8.559-8.559
			C435.625,301.998,431.795,298.166,427.067,298.166z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default sports;