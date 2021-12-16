import React from 'react';
import { Link } from 'react-router-dom';
import ProfShow from './prof_show';

class ProfIndex extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.requestProfs();
    };

    groupReviews(profs, profReviews) {
        let groupedReviews = {}
        for (let i = 0; i < profs.length; i++) {
            if (!groupedReviews[profs[i].id]) {
                groupedReviews[profs[i].id] = []
            }
        }
        for (let i = 0; i < profReviews.length; i++) {
            groupedReviews[profReviews[i].prof_id].push(profReviews[i])
        }
        return groupedReviews
    }

    render() {
        const { profs, profReviews, history } = this.props;
        const groupedReviews = this.groupReviews(profs, profReviews)

        return (
            <div id='prof-index'>
                <h1 id='prof-index-header'>All profs</h1>
                <ul>
                    {
                        profs.map((prof) => 
                            <ProfShow
                            key={prof.id} 
                            prof={prof} 
                            profReviews={groupedReviews[prof.id]}
                            history={history}
                            />
                        )
                    }
                </ul>
                <div id='add-prof'>
                    <div>Don't see the prof you're looking for?</div>
                    <Link to='/profs/new' id='add-prof-link'>Add a prof</Link>
                </div>
            </div>
        );
    };
}

export default ProfIndex;