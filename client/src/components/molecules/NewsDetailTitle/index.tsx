import React from "react";
import * as Sc from "./style";
import routes from "commons/__routes__";
import { Typography, LabelDate, Anchor, Input, Button } from "components";
import { EDIT, DELETE, BACK } from "commons/string";
import dayjs from "dayjs";

type NewsDetailTitleProps = {
  title: string;
  creatorName: string;
  createdAt: Date;
  isEdit?: boolean;
  titleRef?: React.RefObject<HTMLInputElement>;
  onEdit?: () => void;
  onDelete?: () => void;
  onBack?: () => void;
};

function NewsDetailTitle({
  title,
  creatorName,
  createdAt,
  isEdit,
  titleRef,
  onEdit,
  onDelete,
  onBack
}: NewsDetailTitleProps): React.ReactElement {
  return (
    <Sc.Container>
      {isEdit && (
        <Sc.EditTitleWrapper>
          <Input
            defaultValue={title}
            placeholder="Enter Title"
            type="text"
            inputRef={titleRef}
          />
        </Sc.EditTitleWrapper>
      )}
      {!isEdit && (
        <>
          <Sc.MainTitleWrapper>
            <Button theme="gray" onClick={onBack}>
              Back
            </Button>
            <Typography styleType="h1" textAlign="center">
              {title}
            </Typography>
          </Sc.MainTitleWrapper>
          <Sc.SubTitleWrapper>
            <Sc.NameDateWarpper>
              <Typography styleType="h5">{creatorName}</Typography>
              <LabelDate color="black">
                {dayjs(createdAt).format("MMMM DD, YYYY")}
              </LabelDate>
            </Sc.NameDateWarpper>
            <Sc.ButtonsWarpper>
              <Anchor color="success" onClick={onEdit}>
                {EDIT}
              </Anchor>
              <Typography styleType="h5">|</Typography>
              <Anchor color="danger" onClick={onDelete}>
                {DELETE}
              </Anchor>
            </Sc.ButtonsWarpper>
          </Sc.SubTitleWrapper>
        </>
      )}
    </Sc.Container>
  );
}

export default NewsDetailTitle;
