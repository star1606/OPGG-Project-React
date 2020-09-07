import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import "moment/locale/ko";

const HomeListItem = () => {
  moment.locale("ko");

  const [communityDtos, setCommunityDtos] = useState([]);
  const [statusCode, setStatusCode] = useState(0);
  const [resp, setResp] = useState({});

  useEffect(() => {
    axios
      .get("http://59.20.79.42:58002/post/" + 0)
      .then((response) => {
        // if (response.type !== 1) {
        //   for (let index = 0; index < 3; index++) {
        //     setCommunityDtos(response.data.data.post[index]);
        //     console.log(response.data.data);
        //     console.log(response.data.data.post);
        //   }
        // }

        let communityDtos = new Array();

        for (let i = 0; i < 5; i++) {
          communityDtos.push(response.data.data[i]);
        }

        // setCommunityDtos(response.data.data);
        setCommunityDtos(communityDtos);
        setStatusCode(response.data.statusCode);

        console.log(1, communityDtos);
        console.log(2, statusCode);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="community-best__content-left">
        {/* <!-- 커뮤니티 ul 태그--> */}

        <ul className="community-article__list community-article__list--popular">
          {/* <!-- 커뮤니티 li 컴포넌트--> */}
          {communityDtos.map(
            (communityDto) =>
              communityDto.type === 1 && (
                <li
                  className="community-article__list__item"
                  key={communityDto.post.id}
                >
                  <Link to={"/community/" + communityDto.post.id}>
                    <div className="community-article__list__item__rank green">
                      {communityDto.post.id}
                    </div>

                    <div className="community-article__list__item__title">
                      <span>{communityDto.post.title}</span>
                      <em>[{communityDto.post.replies.length}]</em>
                    </div>
                    <div className="community-article__list__item__sub">
                      <div className="community-article__list__item__sub__item">
                        <span>
                          {" "}
                          {moment(communityDto.post.createDate)
                            .startOf("second")
                            .fromNow()}
                        </span>
                      </div>
                      <div className="community-article__list__item__sub__item">
                        {communityDto.post.user.nickname}
                      </div>
                    </div>
                  </Link>
                </li>
              )
          )}

          {/* {communityDtos.map(
            (communityDto) =>
              communityDto.type === 1 && (
                <li
                  className="community-article__list__item"
                  key={communityDto.post.id}
                >
                  <Link to="/community">
                    <div className="community-article__list__item__rank green">
                      {communityDto.post.id}
                    </div>

                    <div className="community-article__list__item__title">
                      <span>{communityDto.post.title}</span>
                      <em>[{communityDto.post.replies.length}]</em>
                    </div>
                    <div className="community-article__list__item__sub">
                      <div className="community-article__list__item__sub__item">
                        <span>
                          {" "}
                          {moment(communityDto.post.createDate)
                            .startOf("second")
                            .fromNow()}
                        </span>
                      </div>
                      <div className="community-article__list__item__sub__item">
                        {communityDto.post.user.nickname}
                      </div>
                    </div>
                  </Link>
                </li>
              )
          )} */}
        </ul>
      </div>
    </>
  );
};

export default HomeListItem;
