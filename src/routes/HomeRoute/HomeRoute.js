var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React from 'react';
import { Button } from 'reactstrap';
import { counterAtom, increment, decrement } from '../../stores/counter';
import { useAtom, useAction } from '@reatom/react';
import { createPage } from '../../libs/ssr/createPage';
import { postsPageAtom, loadPostsActions, usePosts } from './HomeRoute.model';
import { Helmet } from 'react-helmet-async';
import SEOTextContainer from '../../containers/SEOTextContainer';
import { getState } from '@reatom/core';
import { rootAtom } from '../RootRoute/RootRoute.model';
const HomeRoute = () => {
    const posts = usePosts();
    const value = useAtom(rootAtom).testAtom;
    const atomValue = useAtom(counterAtom);
    const inc = useAction(() => increment());
    const dec = useAction(() => decrement());
    return (React.createElement(React.Fragment, null,
        React.createElement("code", null, JSON.stringify(posts)),
        React.createElement(Button, { color: "primary", onClick: inc }, "click to increment"),
        React.createElement(Button, { color: "danger", onClick: dec }, "click to decrement"),
        React.createElement("div", null,
            "the value is ",
            atomValue),
        React.createElement(Button, null, value)));
};
export default createPage(HomeRoute, {
    model: postsPageAtom,
    getInitialData: (dispatch) => dispatch(loadPostsActions()),
    // eslint-disable-next-line react/display-name
    renderMetaTags: (url, getStore) => __awaiter(void 0, void 0, void 0, function* () {
        const data = getState((yield getStore()).getState(), postsPageAtom);
        return (React.createElement(Helmet, null, SEOTextContainer({
            title: 'home page',
            description: `get new info from localhost! there is ${data === null || data === void 0 ? void 0 : data.postsList.length} new posts`,
        })));
    }),
});
//# sourceMappingURL=HomeRoute.js.map