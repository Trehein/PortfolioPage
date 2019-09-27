import { scaleOrdinal } from 'd3'

const colorScale = scaleOrdinal()
.domain(['apple', 'lemon'])
.range(['red', 'yellow']);

const radiusScale = scaleOrdinal()
.domain(['apple', 'lemon'])
.range([50, 30]);

export const fruitBowl = (selection, props ) => {
    const { 
        fruits, 
        height, 
        setSelectedElement, 
        selectedFruit 
    } = props;

    const bowl = selection.selectAll('rect')
        .data([null]) //prevents it from creating a new rect on each invocation of fruitbowl
        .enter().append('rect')
            .attr('width', 700)
            .attr('height', 200)
            .attr('y', 210)
            .attr('rx', 150)
            .attr('fill', '#f2f0e8')

    console.log(bowl)

    const groups = selection.selectAll('g')
        .data(fruits, d => d.id);
    const groupsEnter = groups.enter().append('g');
    
    groupsEnter
        .attr('transform', (d, i) => 
            `translate(${i * 120 + 100}, ${height / 2})`
        )
        .merge(groups)
            //click events should be called on the .merge. I could also add events to the individual circle and text elements in the group.
            .on('click', d => setSelectedElement(d.id))

            //hover events
            // .on('mouseover', d => setSelectedElement(d.id))
            // .on('mouseout', () => setSelectedElement(null))

        .transition().duration(1000)
        .attr('transform', (d, i) => 
            `translate(${i * 120 + 100}, ${height / 2})`
        )

    groups.exit()
        .selectAll('circle')
            .transition().duration(1000)
                .attr('r', 0)      
                .remove();

    groups.exit()
        .selectAll('text')
        .transition().duration(1000)
            .attr('font-size', '0em')
            .remove();   

    //leverages the seleciton made in groups
    groupsEnter.append('circle')
        .attr('r', 0)
        .merge(groups.select('circle'))
            .attr('fill', d => colorScale(d.type))
            .attr('stroke-width', 5)
            .attr('stroke', d => 
                d.id === selectedFruit //ternary opperator ? = if statement and : = else
                    ? 'black'
                    : 'none'
            )
            .transition().duration(1000)
                .attr('r', d => radiusScale(d.type));

    groupsEnter.append('text')
        .merge(groups.select('text'))
            .text(d=> d.type)
            .attr('font-size', '1.5em')
            .attr('text-anchor', 'middle')
            .attr('y', 85) //moving 120 down off of the group translation
}