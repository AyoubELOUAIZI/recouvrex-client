import {
  Button,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import RaisonsDialog from "./dialog/RaisonsDialog";

interface CaseHeaderProps {
  caseId: string;
}

function CaseHeader({ caseId }: CaseHeaderProps) {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Stack
          direction="row" // Ensure this Stack that contains all buttons is set to "row"
          alignItems="center" // Align items in the center vertically
          spacing={1} // Add spacing between each item (Button) in the Stack
        >
          <Typography variant="h3" sx={{ mt: 1, ml: 1 }}>
            Recouvrements #{caseId}
          </Typography>
          <Button
            size="small"
            sx={{ backgroundColor: "orange" }}
            variant="contained"
          >
            pré-douteux
          </Button>
        </Stack>
        <Stack
          direction="row" // Ensure this Stack that contains all buttons is set to "row"
          alignItems="center" // Align items in the center vertically
          spacing={1} // Add spacing between each item (Button) in the Stack
        >
          <Button size="small" variant="outlined">
            Enregistrer
          </Button>
          <Button
            size="small"
            variant="contained"
            sx={{ backgroundColor: "orange" }}
          >
            statut douteux
          </Button>
          {/* <Button size="small" variant="contained"  sx={{ backgroundColor: "orange" }}>
            Résultat de suivi
          </Button> */}
          <RaisonsDialog />
          <Button
            size="small"
            variant="contained"
            sx={{ backgroundColor: "orange" }}
          >
            comité déclassement agence
          </Button>
          <Button
            size="small"
            sx={{ backgroundColor: "green" }}
            variant="contained"
          >
            Terminé
          </Button>
        </Stack>
      </Grid>
      <Grid item>
        <Stack
          // Ensure this Stack that contains all buttons is set to "row"
          alignItems="end" // Align items in the center vertically
          spacing={1} // Add spacing between each item (Button) in the Stack
        >
          <Stack
            direction="row" // Ensure this Stack that contains all buttons is set to "row"
            alignItems="center" // Align items in the center vertically
            spacing={1} // Add spacing between each item (Button) in the Stack
          > 
            <Tooltip arrow title="History">
              <IconButton size="small" sx={{ border: '1px solid ' }} color="primary">
              <HistoryOutlinedIcon />
              </IconButton>
            </Tooltip>
            <Tooltip arrow title="Show">
              <IconButton size="small" sx={{ border: '1px solid ' }} color="primary">
                <RemoveRedEyeOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Stack>
          <Button size="small" sx={{ my: 1 }} variant="outlined">
            Forcer statut
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default CaseHeader;
