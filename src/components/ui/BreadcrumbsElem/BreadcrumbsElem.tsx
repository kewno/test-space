import * as React from 'react'
import {Breadcrumbs, Link} from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
// import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import Link from '@material-ui/core/Link';
import './breadcrumbs.sass'
import {BreadcrumbsItem} from "../../../types/types";

type AttrType = {
    elems: BreadcrumbsItem[]
}

const BreadcrumbsElem: React.FC<AttrType> = ({elems}) => {

    return (
        <Breadcrumbs
            separator={'—'}
            className={'breadcrumbs'}
        >
            <Link color="inherit" href="/" >
                <SvgIcon className={'breadcrumbs__icon'} viewBox={'0 0 12 12'}>
                    <path className={'breadcrumbs__path'} d="M10 11.5H2C1.44772 11.5 1 11.0523 1 10.5V5.94536C1 5.66188 1.12032 5.39171 1.33104 5.20207L5.33104 1.60207C5.71134 1.25979 6.28866 1.25979 6.66897 1.60207L10.669 5.20207C10.8797 5.39171 11 5.66188 11 5.94536V10.5C11 11.0523 10.5523 11.5 10 11.5Z" stroke="#3A3A3A"/>
                </SvgIcon>
            </Link>
            {elems.map(el => {
                return <Link color="inherit" href={el.href} className={'breadcrumbs__text'}>
                    {el.text}
                </Link>
            })}

        </Breadcrumbs>
    )
}

export default BreadcrumbsElem