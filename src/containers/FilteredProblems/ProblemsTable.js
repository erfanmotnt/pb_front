import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

import { toPersianNumber } from '../../utils/translateNumber';

const Index = ({
  problems,
}) => {

  console.log(problems)

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align='center'>
              {'شناسه'}
            </TableCell>
            <TableCell align='center'>
              {'نام'}
            </TableCell>
            <TableCell align='center'>
              {'موضوعات اصلی'}
            </TableCell>
            <TableCell align='center'>
              {'درجه سختی'}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {problems?.map(
            (problem, index) =>
              <TableRow key={index}>
                <TableCell align='center'>
                  {toPersianNumber(problem.id)}
                </TableCell>
                <TableCell align='center'>
                  <Button component={Link} to={`/problem/view/${problem.id}/`}>
                    {problem.title}
                  </Button>
                </TableCell>
                <TableCell align='center'>
                  {/* {allTags
                    .filter(tag => problem.tags.includes(tag.id))
                    .map((tag, index) => (
                      <Tag
                        label={tag.name}
                        key={index}
                      />
                    ))} */}
                </TableCell>
                <TableCell align='center'>
                  {toPersianNumber(problem.difficulty)}
                </TableCell>
              </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Index;